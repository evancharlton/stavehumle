export const jsonFetch = (url: string) =>
  fetch(url).then((resp) => resp.json());
