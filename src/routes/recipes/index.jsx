// import { Delete } from "@mui/icons-material";
import {
  Book,
  Bookmark,
  BookmarkAdd,
  Save,
  Search,
  Warning,
} from "@mui/icons-material";
import {
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import { useCallback } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useRecipeStore from "../../state/recipeState";
import useUserStore from "../../state/userState";

export const Recipes = () => {
  const navigate = useNavigate();
  const {
    currentRecipe,
    recipeBook,
    setCurrentRecipe,
    addToRecipeBook,
    error,
  } = useRecipeStore();
  const { loggedIn } = useUserStore();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const checkAuth = useCallback(() => {
    if (!loggedIn) {
      navigate("/log-in");
    }
  }, [loggedIn, navigate]);
  const assignRecipe = useCallback(() => {
    if (!currentRecipe && recipeBook.length > 0) {
      setCurrentRecipe(recipeBook[0]);
    }
  }, [recipeBook, currentRecipe]);
  useEffect(() => {
    assignRecipe();
    // checkAuth();
  }, []);
  return (
    <div className="chefAiContainer">
      {
        <div className="chefAiCard" style={{ marginTop: "80px" }}>
          <div className="chefAiIngredientsHeader">
            <div>
              <Typography
                variant="h4"
                component="div"
                sx={{
                  color: "white",
                  width: "100%",
                  textAlign: "center",
                }}
              >
                Recipe
                <span style={{ fontWeight: "800", color: "#6B5974" }}>
                  Book
                </span>
              </Typography>
              <h2>{currentRecipe?.title || "Select a recipe:"}</h2>
            </div>
            <div style={{ width: "100%" }} />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            {/* <span>{currentRecipe?.title || "Select a recipe:"}</span>  */}
            <div style={{ width: "100%" }} />
            <Tooltip title="Search for other recipes!">
              <IconButton id="recipe-select" href="/" style={{ color: "" }}>
                <Search />
              </IconButton>
            </Tooltip>
            {!loggedIn ? (
              <Tooltip title="Log In or Create Account To Save This Recipe">
                <IconButton
                  style={{ textAlign: "center" }}
                  color="warning"
                  href="/log-in"
                >
                  <Warning />
                </IconButton>
              </Tooltip>
            ) : (
              <>
                <Tooltip title={!error ? "Save recipe" : error}>
                  <IconButton
                    id="recipe-select"
                    disabled={!loggedIn}
                    onClick={() => addToRecipeBook()}
                    style={{ color: "" }}
                  >
                    <BookmarkAdd />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Recipe Book">
                  <IconButton
                    id="recipe-select"
                    disabled={!loggedIn}
                    aria-controls={open ? "recipe-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                    style={{ color: "" }}
                  >
                    <Book />
                  </IconButton>
                </Tooltip>
              </>
            )}
            <Menu
              id="recipe-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "recipe-button",
              }}
            >
              {recipeBook?.map((recipe, key) => {
                return (
                  <MenuItem key={key} onClick={() => setCurrentRecipe(recipe)}>
                    {recipe?.title}
                  </MenuItem>
                );
              })}
            </Menu>
          </div>
          <hr />
          {currentRecipe?.ingredients && (
            <div className="chefAiCardContent">
              <h3>Ingredients:</h3>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                }}
              >
                {currentRecipe?.ingredients?.map((item, key) => {
                  return (
                    <div key={key} className="ingredientsItem">
                      <FormControlLabel control={<Checkbox />} label={item} />
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          {currentRecipe?.instructions && (
            <div className="chefAiCardContent">
              <h3>Instructions:</h3>
              {currentRecipe?.instructions?.map((item, i) => {
                return (
                  <div key={i} className="instructionItem">
                    <FormControlLabel control={<Checkbox />} label={item} />
                  </div>
                );
              })}
            </div>
          )}
          {/* {currentRecipe?.img && (
            <div
              style={{
                height: "400px",
                overflow: "hidden",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "scroll",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundImage: `url(${currentRecipe?.img})`,
              }}
            />
          )} */}
        </div>
      }
    </div>
  );
};
