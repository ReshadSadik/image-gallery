import * as React from "react";
import Box from "@mui/material/Box";
import Image from "./Image";
import { IMAGE_SERVICE } from "../services/imageServices";
import PaginationContainer from "./PaginationContainer";
import { Button, TextField } from "@mui/material";

const Images = () => {
  const [images, setImages] = React.useState();
  const [page, setPage] = React.useState(1);
  const [keyword, setKeyword] = React.useState("");
  console.log(keyword);
  const inputValue = React.useRef(null);

  const handleSearch = () => {
    setKeyword(inputValue.current.value);
    setPage(1);
  };

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
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <TextField
          inputRef={inputValue}
          id="outlined-basic"
          label="Seach Photos"
          variant="outlined"
          size="small"
        />
        <Button onClick={handleSearch} variant="contained">
          search
        </Button>
      </Box>
      <Image images={images} />
      <PaginationContainer page={page} setPage={setPage} />
    </Box>
  );
};

export default Images;
