export const jsonFetch = (url: string) =>
  fetch(url, { headers: { 'Content-Type': 'application/json' } }).then((resp) =>
    resp.json()
  );
