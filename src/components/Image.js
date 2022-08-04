import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import { Box, CircularProgress } from "@mui/material";
const Image = ({ images }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ImageList
        sx={{
          width: 1300,
          height: 600,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {images ? (
          images.map((item) => (
            <ImageListItem key={item.id}>
              <img
                src={`${item?.src?.original}?w=248&fit=crop&auto=format`}
                srcSet={`${item?.src?.original}?w=248&h&fit=crop&auto=format&dpr=2 2x`}
                alt={item.alt}
                loading="lazy"
              />
              <ImageListItemBar
                title={item.alt}
                actionIcon={
                  <IconButton
                    sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                    aria-label={`info about ${item.title}`}
                  ></IconButton>
                }
              />
            </ImageListItem>
          ))
        ) : (
          <Box>
            <CircularProgress />
          </Box>
        )}
      </ImageList>
    </Box>
  );
};

export default Image;
