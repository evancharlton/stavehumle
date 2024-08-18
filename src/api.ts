import pako from "pako";

export const jsonFetch = (url: string) =>
  fetch(url, { headers: { "Content-Type": "application/json" } }).then((resp) =>
    resp.json()
  );

export const gzipJsonFetch = async (url: string) => {
  const resp = await fetch(url.replace(/^\/\//, "/"), {
    headers: { "Content-Type": "application/json", "Content-Encoding": "gzip" },
  });
  try {
    return resp.json();
  } catch (ex) {
    console.warn("Could not parse as JSON", ex);
    const buf = await resp.arrayBuffer();
    const buf_1 = new Uint8Array(buf);
    const buf_2 = pako.inflate(buf_1, { raw: true });
    const str = new TextDecoder("utf-8").decode(buf_2);
    return JSON.parse(str);
  }
};
