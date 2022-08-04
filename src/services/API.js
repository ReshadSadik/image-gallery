export const GETAPI = (url, onSuccess, onError) => {
  fetch(url, {
    method: "get",
    headers: new Headers({
      Authorization:
        "Bearer 563492ad6f9170000100000158a30776c7704b23b3e3cad0b93ea24f",
      "Content-Type": "application/json",
    }),
  })
    .then((response) => response.json())
    .then((data) => onSuccess(data))
    .catch((err) => onError(err));
};
