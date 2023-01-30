import {
  AccountBox,
  Book,
  Kitchen,
  Login,
  Logout,
  MenuOpen,
  MenuRounded,
  QuestionAnswer,
} from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import useRecipeStore from "../state/recipeState";
import useUserStore from "../state/userState";

export const AppToolBar = () => {
  const { loggedIn, logOut, currentUser } = useUserStore();
  const { recipeBook, setRecipeBook } = useRecipeStore();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar position="fixed">
      <Toolbar style={{ background: "#D5CABD" }}>
        {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
        <Avatar
          src="./chefAi.jpg"
          style={{ cursor: "pointer", marginRight: "8px" }}
        />
        <Typography
          onClick={() => {
            window.open("/", "_self");
          }}
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, cursor: "pointer" }}
        >
          Chef
          <span style={{ fontWeight: "800", color: "#6B5974" }}>AI</span>
        </Typography>
        <div style={{ width: "100%" }} />
        <IconButton sx={{ backgroundColor: "#6B5974" }} onClick={handleClick}>
          <MenuRounded sx={{ color: "white" }} />
        </IconButton>
        {loggedIn ? (
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem>
              <AccountBox />
              &nbsp;
              <div style={{ width: "100%" }} />
              {currentUser?.email}
            </MenuItem>
            <hr />
            <MenuItem
              onClick={() => {
                window.open("/", "_self");
              }}
            >
              ChefAI Home
              <div style={{ width: "100%" }} /> <Kitchen />
            </MenuItem>
            <MenuItem
              disabled={recipeBook.length < 1}
              onClick={() => {
                if (recipeBook.length > 0) window.open("/recipes", "_self");
              }}
            >
              Recipe Book
              <div style={{ width: "100%" }} />{" "}
              <Book sx={{ color: `${recipeBook.length > 0 ? "" : "grey"}` }} />
            </MenuItem>
            <MenuItem
              onClick={() => {
                window.open("/about", "_self");
              }}
            >
              About
              <div style={{ width: "100%" }} />
              <QuestionAnswer />
            </MenuItem>
            <MenuItem
              onClick={() => {
                setRecipeBook([]);
                logOut();
                window.open("/", "_self");
              }}
            >
              Logout
              <div style={{ width: "100%" }} />
              <Logout />
            </MenuItem>
          </Menu>
        ) : (
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem
              onClick={() => {
                window.open("/about", "_self");
              }}
            >
              About
              <div style={{ width: "100%" }} />
              <QuestionAnswer />
            </MenuItem>
            <MenuItem
              onClick={() => {
                window.open("/log-in", "_self");
              }}
            >
              Log In
              <div style={{ width: "100%" }} />
              <Login />
            </MenuItem>
          </Menu>
        )}
      </Toolbar>
    </AppBar>
  );
};
