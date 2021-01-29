const fs = require('fs');
const readline = require('readline');
const path = require('path');

const filename =
  process.argv[2] ||
  path.resolve(
    path.join(
      __dirname,
      '20191010_norsk_ordbank_nob_2005',
      'fullformsliste.txt'
    )
  );
if (!filename) {
  console.error(`Usage: ${process.argv.slice(0, 2).join(' ')} <filename>`);
  process.exit(1);
}

const readInterface = readline.createInterface({
  input: fs.createReadStream(filename, { encoding: 'latin1' }),
  console: false,
});

const invalidLetter = (letter) => {
  switch (letter) {
    case '-':
    case '.':
    case ' ':
    case "'":
      return true;
  }

  if (letter.toLocaleLowerCase() !== letter) {
    return true;
  }

  return false;
};

const isSubSet = (parentSet, letters) => {
  for (let i = 0; i < letters.length; i += 1) {
    if (!parentSet.has(letters[i])) {
      return false;
    }
  }
  return true;
};

const toObject = (map) => {
  const obj = {};
  map.forEach((value, key) => {
    obj[key] = value;
  });
  return obj;
};

let lines = 0;
const words = new Set();
const onLine = (line) => {
  if (lines++ === 0) {
    return;
  }

  const word = line.split('\t')[2];
  if (word.length < 4) {
    return;
  }

  const letters = [...new Set(word.split(''))];
  if (letters.length > 7) {
    return;
  }

  if (letters.find(invalidLetter)) {
    return;
  }

  words.add(word);
};

onClose = () => {
  console.log('lines:', lines);
  console.log('words:', words.size);

  const arr = [...words].sort();
  fs.writeFileSync('output.txt', arr.join('\n'));

  const candidates = [...words]
    .filter((word) => word.length >= 7)
    .filter((word) => new Set(word.split('')).size === 7)
    .map((word) => [...new Set(word.split(''))].sort().join(''))
    .sort();

  const pangramCounts = {};
  candidates.forEach((candidate) => {
    pangramCounts[candidate] = (pangramCounts[candidate] || 0) + 1;
  });

  const outdir = path.resolve(path.join(__dirname, '..', 'public', 'words'));
  if (!fs.existsSync(outdir)) {
    fs.mkdirSync(outdir);
  }

  fs.writeFileSync(
    path.join(outdir, 'options.json'),
    JSON.stringify(Object.keys(pangramCounts))
  );

  const wordCache = new Map();
  console.log('Build word cache ...');
  arr.forEach((word) => {
    const letters = [...new Set(word.split(''))].sort();
    wordCache.set(word, letters);
  });
  console.log(`Done (${wordCache.size} words processed)`);

  let lastKey = '';
  const acc = new Map();

  const combos = Object.keys(pangramCounts);
  combos.push(''); // Make sure we have one final loop
  combos.forEach((candidate) => {
    const sevenLetters = new Set(candidate.split(''));

    const validWords = arr.filter((word) => {
      return isSubSet(sevenLetters, wordCache.get(word));
    });

    const key = candidate.substr(0, 3);
    if (lastKey !== key) {
      if (lastKey) {
        fs.writeFileSync(
          path.join(outdir, `${lastKey}.json`),
          JSON.stringify(toObject(acc))
        );

        console.log(`    (${acc.size} candidates processed)`);
        acc.clear();
      }

      if (!key) {
        return;
      }

      console.log(`... processing ${key}`);
      lastKey = key;
    }
    acc.set(candidate, validWords);
  });

  process.exit(0);
};

readInterface.on('line', onLine);
readInterface.on('close', onClose);
