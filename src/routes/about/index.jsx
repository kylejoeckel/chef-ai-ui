import { Button, Typography, Avatar } from "@mui/material";
import { CardHeader } from "../../components/CardHeader";
import "../../Main.css";

export const AboutChefAi = () => {
  return (
    <div className="chefAiContainer">
      <div
        className="chefAiCard"
        style={{ marginTop: "80px", textAlign: "left" }}
      >
        <CardHeader title="about" />
        <div className="chefAiCardContent">
          <p>
            Welcome to Chef AI Recipes, the home of innovative and exciting
            AI-generated recipes. We are an online platform that provides free
            access to thousands of delicious recipes created by our advanced AI
            system. Our goal is to make cooking and meal planning easier and
            more enjoyable for everyone.
          </p>
          <p>
            Creating an account with us is simple and free. You can save your
            favorite recipes, personalize your shopping list, and get
            personalized recommendations based on your dietary needs and
            preferences. With your account, you will also have access to our
            growing community of food lovers and recipe creators, where you can
            share your own recipes and learn from others.
          </p>
          <p>
            Whether you are a beginner cook or an experienced chef, Chef AI
            Recipes is the perfect resource for all your culinary needs. We are
            always updating our database with new recipes and features, so be
            sure to check back often for the latest and greatest.
          </p>
          <p>
            So why wait? Start exploring our world of delicious and innovative
            AI-generated recipes today. We can't wait to see what amazing
            creations you will cook up!
          </p>

          <p>- Team ChefAI</p>
          <br />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Avatar
              alt="ChefAI"
              sx={{
                width: 72,
                height: 72,
                borderRadius: "12px",
              }}
              variant="square"
              src="/chefAi.jpg"
            />
            <Button
              href={"/"}
              sx={{ backgroundColor: "#BC4846" }}
              variant="contained"
            >
              Start Cooking!
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
