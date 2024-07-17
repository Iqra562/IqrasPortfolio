import React from "react";
import { Box, styled, Typography } from "@mui/material";

const HeadingBox = styled(Box)({
  position: "relative",
  top: "10px",
  display: "flex",
  alignItems:"center"
});

const styles = {
  heading: {
    display: "inline-block",
    width: "25%",
    height: "2px",
    backgroundColor: "#69b6fa",
    marginTop:"8px",
    marginLeft:"2px"

  },
};

function CommonHeader({ PageName }) {
  return (
    <HeadingBox>
      <Typography style={{ color: "#dedede" }} className="heading">
        {PageName}
      </Typography>
        <span style={{ ...styles.heading, width: "1%" }}></span>
    </HeadingBox>
  );
}

export default CommonHeader;
