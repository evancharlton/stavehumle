import pako from 'pako';

export const jsonFetch = (url: string) =>
  fetch(url, { headers: { 'Content-Type': 'application/json' } }).then((resp) =>
    resp.json(),
  );

export const gzipJsonFetch = async (url: string) => {
  const resp = await fetch(url.replace(/^\/\//, '/'), {
    headers: {
      'Content-Type': 'application/json',
      'Content-Encoding': 'gzip',
    },
  });

  // I don't know why this behaves differently than on production.
  if (import.meta.env.DEV) {
    return resp.json();
  }

  const buf = await resp
    .arrayBuffer()
    .then((buf) => new Uint8Array(buf))
    .then((buf) => pako.inflate(buf));
  const str = new TextDecoder('utf-8').decode(buf);
  return JSON.parse(str);
};
