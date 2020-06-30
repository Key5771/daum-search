function fetchUrl(url, parameter) {
  const urlParam = new URLSearchParams(parameter);
  return fetch(`${url}?${urlParam.toString()}`, parameter)
    .then((response) => response.json())
    .catch(() => null);
}

export { fetchUrl };
