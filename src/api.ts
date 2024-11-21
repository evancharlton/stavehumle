export const jsonFetch = (url: string) =>
  fetch(url.replace(/^\/\//, '/'), {
    headers: { 'Content-Type': 'application/json' },
  }).then((resp) => resp.json());
