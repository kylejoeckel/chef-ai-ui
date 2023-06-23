import {
  AccountBox,
  Article,
  Book,
  Kitchen,
  Login,
  Logout,
  MenuRounded,
  Policy,
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
  const { recipeBook, setRecipeBook, clearError } = useRecipeStore();
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
      <Toolbar className="chefAiAppBar">
        <Avatar
          src="/chefAi.jpg"
          style={{ cursor: "pointer", marginRight: "8px" }}
        />
        <Typography
          onClick={() => {
            window.open("/", "_self");
          }}
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            cursor: "pointer",
          }}
        >
          Chef
          <span className="aiText">AI</span>
        </Typography>
        <IconButton onClick={handleClick}>
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
                if (recipeBook.length > 0) {
                  clearError();
                  window.open("/recipes", "_self");
                }
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
                window.open("/blogs", "_self");
              }}
            >
              Blog
              <div style={{ width: "100%" }} />
              <Article />
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
            <MenuItem
              onClick={() => {
                window.open("/policies", "_self");
              }}
            >
              Policies & Disclosures{" "}
              <div style={{ marginLeft: "12px", width: "100%" }} />
              <Policy />
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
                window.open("/", "_self");
              }}
            >
              Home
              <div style={{ width: "100%" }} />
              <Kitchen />
            </MenuItem>
            <MenuItem
              onClick={() => {
                window.open("/sign-up", "_self");
              }}
            >
              Create Account
              <div style={{ width: "100%" }} />
              <AccountBox />
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
                window.open("/blogs", "_self");
              }}
            >
              Blog
              <div style={{ width: "100%" }} />
              <Article />
            </MenuItem>
            <MenuItem
              onClick={() => {
                window.open("/policies", "_self");
              }}
            >
              Policies & Disclosures <div style={{ width: "100%" }} />
              <Policy />
            </MenuItem>
          </Menu>
        )}
      </Toolbar>
    </AppBar>
  );
};
