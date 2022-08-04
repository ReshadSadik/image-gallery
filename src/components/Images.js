import * as React from "react";
import Box from "@mui/material/Box";
import Image from "./Image";
import { IMAGE_SERVICE } from "../services/imageServices";
import PaginationContainer from "./PaginationContainer";

const Images = () => {
  const [images, setImages] = React.useState();
  const [page, setPage] = React.useState(1);
  React.useEffect(() => {
    const onSuccess = (data) => {
      setImages(data);
    };
    const onError = (err) => {
      console.log(err);
    };
    IMAGE_SERVICE.getImages(page, onSuccess, onError);
  }, [page]);

  return (
    <Box
      sx={{
        marginTop: "40px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Image images={images} />
      <PaginationContainer page={page} setPage={setPage} />
    </Box>
  );
};

export default Images;
