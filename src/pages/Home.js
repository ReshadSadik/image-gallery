import { Box, Typography } from "@mui/material";
import React from "react";
import Images from "../components/Images";

const Home = () => {
  return (
    <Box sx={{ padding: 5 }}>
      <Typography sx={{ margin: "20px auto" }} variant="h4" fontWeight={"bold"}>
        IMAGE GALLERY
      </Typography>
      <Images />
    </Box>
  );
};

export default Home;
