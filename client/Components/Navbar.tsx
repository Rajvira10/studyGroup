import type { NextPage } from "next";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { ButtonGroup } from "@mui/material";
import Style from "../styles/Navbar.module.css";
import Link from "next/link";

const Navbar: NextPage = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar className={Style.nav}>
          <div className={Style.nav1}>
            <Typography
              variant="h6"
              component="h6"
              sx={{ marginRight: 5, cursor: "pointer" }}
            >
              <Link href="/">Home</Link>
            </Typography>
            <Typography
              variant="h6"
              component="h6"
              sx={{ marginRight: 5, cursor: "pointer" }}
            >
              <Link href="/studygroups">Study Groups</Link>
            </Typography>
            <Typography
              variant="h6"
              component="h6"
              sx={{ marginRight: 5, cursor: "pointer" }}
            >
              My Groups
            </Typography>
          </div>
          <ButtonGroup
            className={Style.buttonGroup}
            variant="contained"
            color="inherit"
            sx={{ color: "black" }}
          >
            <Button className={Style.button}>
              <Link href="/signin">Sign In</Link>
            </Button>
            <Button className={Style.button}>
              <Link href="/signup">Sign Up</Link>
            </Button>
          </ButtonGroup>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
