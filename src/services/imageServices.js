import { GETAPI } from "./API";
import { urls } from "./urls";

function getImages(page, onSuccess, onError) {
  GETAPI(
    `${urls.BASE_URL}/curated?page=${page}&per_page=5`,

    (data) => {
      onSuccess(data.photos);
    },
    (err) => {
      onError(err);
    }
  );
}
function getImagesByName(keyword, page, onSuccess, onError) {
  GETAPI(
    `${urls.BASE_URL}/search?query=${keyword}&per_page=5&page=${page}`,

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
  getImagesByName,
};
