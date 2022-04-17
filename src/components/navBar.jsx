import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

const NavBar = (props) => {
  return (
    <div
      style={{
        backgroundColor: "rgb(37,37,37)",
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <AppBar
        position="static"
        sx={{
          width: "976px",
          height: "70px",
          backgroundColor: "rgb(45,45,45)",
          boxShadow: "0px 0px 0.625rem rgb(20,20,20)",
          border: "0.06rem solid rgb(45,45,45)",
          borderRadius: "0.625rem",
        }}
      >
        <Container width="100%">
          <Typography variant="h6">
            <Link
              href="www.baidu,com"
              sx={{ color: "rgb(250,250,250)" }}
              underline="none"
            ></Link>
          </Typography>
        </Container>
      </AppBar>
    </div>
  );
};
export default NavBar;
