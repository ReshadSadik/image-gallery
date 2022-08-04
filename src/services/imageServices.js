import { GETAPI } from "./API";

function getImages(page, onSuccess, onError) {
  GETAPI(
    `https://api.pexels.com/v1/curated?page=${page}&per_page=5`,

    (data) => {
      onSuccess(data.photos);
    },
    (err) => {
      onError(err);
    }
  );
}
export const IMAGE_SERVICE = {
  getImages,
};
