// import { Delete } from "@mui/icons-material";
import {
  Book,
  BookmarkAdd,
  BookmarkAddOutlined,
  SavedSearch,
  Search,
  Timelapse,
  Warning,
} from "@mui/icons-material";
import {
  Link,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Paper,
  TextField,
  Tooltip,
} from "@mui/material";
import { useCallback } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdBox from "../../components/AdBox";
import { CardHeader } from "../../components/CardHeader";
import useRecipeStore from "../../state/recipeState";
import useUserStore from "../../state/userState";

export const Recipes = () => {
  const navigate = useNavigate();
  const {
    currentRecipe,
    recipeBook,
    getRecipe,
    setCurrentRecipe,
    addToRecipeBook,
    loading,
    error,
  } = useRecipeStore();
  const { loggedIn } = useUserStore();
  const [anchorEl, setAnchorEl] = useState(null);
  const [search, setSearch] = useState(null);
  const [recipeExists, setRecipeExists] = useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const checkAuth = useCallback(() => {
    if (error) {
      navigate("/");
    }
  }, [loggedIn, navigate]);
  const assignRecipe = useCallback(() => {
    if (!currentRecipe && recipeBook.length > 0) {
      setCurrentRecipe(recipeBook[0]);
    }
  }, [recipeBook, currentRecipe]);

  const checkExists = useCallback(() => {
    const titleArray = recipeBook.map((recipe) => {
      if (currentRecipe?.title === recipe?.title) return true;
      return false;
    });
    return titleArray.includes(true);
  });
  useEffect(() => {
    assignRecipe();
    checkAuth();
    setRecipeExists(checkExists());
  }, [recipeBook]);
  return (
    <div className="chefAiContainer">
      {
        <div className="chefAiCard" style={{ marginTop: "80px" }}>
          <CardHeader title="recipe book" />
          <Paper
            elevation={0}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "8px 16px",
              whiteSpace: "nowrap",
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1, width: "100%" }}
              placeholder={currentRecipe?.title || "Search for a recipe"}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              onKeyUp={(e) => {
                if (e.key === "Enter") {
                  getRecipe(search);
                }
              }}
              inputProps={{ "aria-label": "search google maps" }}
            />
            <Tooltip title="Search for other recipes!">
              <IconButton
                type="button"
                sx={{ p: "10px" }}
                aria-label="search"
                onClick={() => {
                  getRecipe(search);
                }}
                disabled={loading}
              >
                {loading ? <Timelapse /> : <Search />}
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
                <Tooltip
                  title={
                    !error && !recipeExists
                      ? "Save recipe"
                      : "Recipe exists in recipe book"
                  }
                >
                  <IconButton
                    id="recipe-save"
                    disabled={recipeExists}
                    onClick={() => {
                      addToRecipeBook();
                      setRecipeExists(checkExists());
                    }}
                    sx={{ color: !recipeExists ? "#FFDF82" : "#407B50" }}
                  >
                    {recipeExists ? <BookmarkAdd /> : <BookmarkAddOutlined />}
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
                    style={{ color: "#B54E4B" }}
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
          </Paper>
          <hr style={{ marginBlockStart: "0", marginBlockEnd: "0" }} />
          <AdBox />
          {error && (
            <p className="chefAiCardContent" style={{ color: "red" }}>
              Sorry, something's not right, try again...
            </p>
          )}
          {currentRecipe?.ingredients && (
            <div className="chefAiCardContent">
              <h2>{currentRecipe?.title}</h2>
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
        </div>
      }
    </div>
  );
};
