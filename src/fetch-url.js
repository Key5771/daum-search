function fetchUrl(url, parameter) {
  return fetch(url)
    .then((response) => response.json())
    .catch((reject) => null);
}

export { fetchUrl };
