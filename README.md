# Stavehumle

This is a tribute to the delightful [Spelling Bee] game published by the [New York Times].
It is intended to help me expand my Norwegian vocabulary, and it's also intended to just be fun.

It's [freely playable online](https://evancharlton.github.io/stavehumle/) on any modern browser.

## Running locally

```sh
yarn # install the dependencies
yarn start
```

That's it!
You should now have a server running and you should be able to navigate to https://localhost:3000 and see the app.

## Updating the dictionary

The word bank is sourced from [nb.no].
It is currently using the [2019-10-10 version][ordbank].
There are instructions for how to generate the necessary data files in the `wordlist/README.md` file.

[spelling bee]: https://www.nytimes.com/puzzles/spelling-bee
[new york times]: https://nytimes.com
[nb.no]: https://nb.no
[ordbank]: https://www.nb.no/sprakbanken/ressurskatalog/oai-nb-no-sbr-5/
