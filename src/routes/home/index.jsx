import { useState } from "react";
import "../../Main.css";
import { useEffect } from "react";
import useUserStore from "../../state/userState";
// import { useNavigate } from "react-router-dom";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  Fab,
  FormControlLabel,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import useRecipeStore from "../../state/recipeState";
import { Delete, ExpandMore, Favorite } from "@mui/icons-material";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();
  const { currentUser, loggedIn } = useUserStore();
  const {
    getRecipe,
    loading,
    error,
    currentRecipe,
    clearRecipe,
    addToRecipeBook,
    recipeBook,
    setLoading,
    setRecipeBook,
  } = useRecipeStore();
  const [food, setFood] = useState("");

  const handleGetRecipe = async () => {
    await getRecipe(food);
    if (!error) navigate("/recipes");
  };
  let i = 0;
  const open_txt = ` What are we going to make today?`;
  const speed = 80;

  function typeWriter(txt) {
    if (i < txt.length) {
      document.getElementById("welcomeText").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter(txt), speed);
    }
  }
  const addFavs = useCallback(() => {
    if (loggedIn) {
      addToRecipeBook();
    } else {
      console.log("You need to be logged in for that.");
    }
  }, [loggedIn, addToRecipeBook]);

  useEffect(() => {
    setRecipeBook(
      currentUser?.recipe_book?.length > 0
        ? currentUser?.recipe_book
        : recipeBook
    );

    clearRecipe();
    setLoading(false);
    // document.getElementById("welcomeText").innerHTML = "";
    // typeWriter(open_txt);
  }, []);
  return (
    <div className="chefAiContainer">
      <div className="chefAiCard" style={{ marginTop: "80px" }}>
        <div className="chefAICardHeader">
          <h2>
            <Typography
              variant="h2"
              component="div"
              sx={{
                color: "white",
                width: "100%",
                textAlign: "center",
              }}
            >
              Chef
              <span style={{ fontWeight: "800", color: "#6B5974" }}>AI</span>
            </Typography>
            &nbsp;home{" "}
          </h2>
        </div>
        <div className="chefAiCardContent">
          {/* <p id="welcomeText"></p> */}
          {/* <p id="thoughtsBlock"></p> */}
          {/* <p>
            Enter a dish name below. Customize it by including ingredients you
            dont want or have on hand. Ex. "Lasagna made with no ricotta cheese"{" "}
          </p> */}

          <div
            style={{ display: "flex", flexDirection: "column", width: "100%" }}
          >
            <TextField
              type="text"
              fullWidth
              placeholder="Penne Alla Vodka..."
              onChange={(e) => setFood(e.target.value)}
              onKeyUp={(e) => {
                if (e.key === "Enter") {
                  handleGetRecipe(food);
                }
              }}
            />
            {/* <p style={{ fontSize: "smaller" }}>
              Using ChefAi.Recipes is easy and straightforward. First, create an
              account to start saving your favorite recipes. You can add your
              own recipes or save recipes from the web and categorize them by
              meal type, cuisine, or ingredient. ChefAi.Recipes even allows you
              to customize recipes by including only the ingredients you have on
              hand, ensuring that you never have to make a last-minute trip to
              the grocery store again. With ChefAi.Recipes, you'll have all your
              recipes in one place, and you'll be able to access them from any
              device, making meal planning and cooking a breeze. Sometimes it
              takes a while for a response so bare with us as we improve. Create
              an account to save your favorite recipes and help speed things up.
              Let us know how we're doing on our facebook page!
            </p> */}
            <LoadingButton
              type="button"
              fullWidth
              value={loading ? "Thinking..." : "Get Recipe!"}
              disabled={
                loading || currentUser?.credits <= 0 || !food || food === ""
              }
              onClick={() => handleGetRecipe(food)}
              loading={loading}
            >
              Get Recipe
            </LoadingButton>
          </div>

          {currentUser?.credits <= 0 && (
            <p>
              You're out of credits for now... check back soon to purchase more!
            </p>
          )}
          {error && <p style={{ color: "red" }}>Sorry, {error}</p>}
          <h3>ChefAi.Recipes: The Ultimate Recipe Management Platform</h3>

          <p>
            Cooking can be a messy business. From searching for recipes to
            keeping track of ingredients, it can be difficult to stay organized
            and efficient in the kitchen. That's where ChefAi.Recipes comes in.
          </p>

          <p>
            ChefAi.Recipes is a platform designed to help you store and manage
            your favorite recipes in one place. Whether you're a seasoned cook
            or just starting out, ChefAi.Recipes makes it easy to keep all your
            recipes organized and easily accessible.
          </p>

          <p>
            With ChefAi.Recipes, you can save your own recipes or save recipes
            from the web for quick and easy reference. And, with access from any
            device, you'll never have to search for a recipe again.
          </p>

          <p>
            So, what are some of the different use cases for ChefAi.Recipes?
            Recipe Library: With ChefAi.Recipes, you can store all your favorite
            recipes in one place and have them readily available whenever you
            need them. No more flipping through cookbooks or scrolling through
            pages of search results trying to find that one recipe you loved.
            Meal Planning: ChefAi.Recipes makes meal planning a breeze. Cooking
            Companion: ChefAi.Recipes is the perfect cooking companion. You can
            access your recipes from anywhere, at any time, and never have to
            worry about losing track of a great recipe again.
          </p>

          <p>
            By creating an account with ChefAi.Recipes, you'll have the ability
            to store and manage all your favorite recipes in one convenient
            place. Not only will you be able to enjoy a more organized and
            efficient cooking experience, but you'll also be helping to improve
            the platform for everyone. The more you use ChefAi.Recipes, the more
            the AI model learns about your preferences and tastes, allowing it
            to provide even more personalized and accurate recipe suggestions in
            the future.
          </p>
          <p>
            So, what are you waiting for? Sign up for ChefAi.Recipes today and
            start enjoying the benefits of a more organized and efficient
            cooking experience! With ChefAi.Recipes, you'll never have to worry
            about messy recipe management again.
          </p>
          <br />
          <Accordion elevation={0}>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>
                Here are some tips to help you get the most out of Chef AI
                Recipes:
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ol>
                <li>
                  Creating an Account: To access all the features of Chef AI
                  Recipes, you'll need to create an account. This is a quick and
                  easy process and is completely free.
                </li>

                <li>
                  Searching for Recipes: You can search for recipes by keyword,
                  cuisine type, dietary restrictions, and more. Our AI-generated
                  recipes are updated regularly, so be sure to check back often
                  for new and exciting options.
                </li>

                <li>
                  Saving Recipes: To save a recipe, simply click the "Save
                  Recipe" button. The recipe will disapear but you can access
                  your saved recipes anytime by clicking on the icon in the
                  upper right hand corner and then clicking the "Recipe Book"
                  menu option.
                </li>

                {/* <li>
              Using the Shopping List: To add ingredients to your shopping list,
              simply click on the ingredient and it will be added to your list.
              You can access your shopping list anytime by clicking on the
              "Shopping List" tab.
            </li>

            <li>
              Sharing Recipes: To share a recipe with our community, simply
              click on the "Share Recipe" button. You can also browse other
              users' recipes and get inspiration for your next meal.
            </li>

            <li>
              Recipe Suggestions: Based on your dietary preferences and needs,
              our AI system will provide you with personalized recipe
              recommendations. You can customize your preferences by clicking on
              the "Settings" tab.
            </li> */}

                <li>
                  Frequent Updates: ChefAI Recipes is constantly being updated
                  with new features and recipes, so be sure to check back often
                  to see what's new.
                </li>
              </ol>

              <p>
                We hope these tips help you get the most out of Chef AI Recipes.
                Happy cooking!
              </p>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
      {currentRecipe && (
        <div className="chefAiCard">
          <div className="chefAiIngredientsHeader">
            <h2>{currentRecipe?.title}</h2>
            <Delete
              sx={{ color: "white", cursor: "pointer" }}
              onClick={() => clearRecipe()}
            />
            <Tooltip
              sx={{ position: "fixed", right: "2%", bottom: "2%" }}
              title="Add to recipes"
            >
              <Fab
                color="secondary"
                aria-label="like"
                onClick={() => addFavs()}
                disabled={!loggedIn || recipeBook.length >= 20}
              >
                <Favorite />
              </Fab>
            </Tooltip>
          </div>
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
                {currentRecipe?.ingredients?.map((item, i) => {
                  return (
                    <div key={i} className="ingredientsItem">
                      <FormControlLabel control={<Checkbox />} label={item} />
                    </div>
                  );
                })}
              </div>
            </div>
          )}
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
        </div>
      )}
    </div>
  );
};
