import pako from 'pako';

export const jsonFetch = (url: string) =>
  fetch(url, { headers: { 'Content-Type': 'application/json' } }).then((resp) =>
    resp.json()
  );

export const gzipJsonFetch = (url: string) =>
  fetch(url, {
    headers: { 'Content-Type': 'application/json', 'Content-Encoding': 'gzip' },
  })
    .then((resp) => resp.arrayBuffer())
    .then((buf) => new Uint8Array(buf))
    .then((buf) => pako.inflate(buf))
    .then((buf) => new TextDecoder('utf-8').decode(buf))
    .then((str) => JSON.parse(str));
