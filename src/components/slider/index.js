import React, { useEffect, useState } from "react";
import { Box, Slider, Typography } from "@mui/material";

const imageMarks = [
  { value: 0,  src: "https://bca.grras.com/uploads/banner/36650a0e3f9924157d728a58ee1565e8.jpg" },
  { value: 25,  src: "https://bca.grras.com/uploads/banner/cb508acf5ae7935550c39f38bb3b510b.jpg" },
];

const FullWidthAutoSlider = () => {
  const [value, setValue] = useState(0);

  const handleAutoSlide = () => {
    setValue((prevValue) => {
      const nextIndex = (imageMarks.findIndex((mark) => mark.value === prevValue) + 1) % imageMarks.length;
      return imageMarks[nextIndex].value;
    });
  };

  useEffect(() => {
    const interval = setInterval(handleAutoSlide, 3000); // Change every 3 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const currentImage = imageMarks.find((mark) => mark.value === value)?.src;

  return (
    <Box
      sx={{
        width: "100%",
        margin: "auto",
        textAlign: "center",
        padding: "0px 0",
        background: "linear-gradient(145deg, #e0e0e0, #ffffff)",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        borderRadius: "15px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 3,
          borderRadius: "10px",
          overflow: "hidden",
          height: "400px",
          width: "100%",
          background: "#f5f5f5",
        }}
      >
        {currentImage ? (
          <img
            src={currentImage}
            alt="Selected"
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
              transition: "opacity 1s ease-in-out",
            }}
          />
        ) : (
          <Typography variant="body1" color="textSecondary">
            Loading...
          </Typography>
        )}
      </Box>
    
    </Box>
  );
};

export default FullWidthAutoSlider;
