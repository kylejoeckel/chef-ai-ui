import { Typography } from "@mui/material";
import "../../Main.css";
import useBlogStore from "../../state/blogState";
import { BlogList } from "./BlogList";
import { CardHeader } from "../../components/CardHeader";

export const BlogChefAi = () => {
  const { blogs } = useBlogStore();
  return (
    <div className="chefAiContainer">
      <div
        className="chefAiCard"
        style={{ marginTop: "80px", textAlign: "left" }}
      >
        <CardHeader title="Blogs" />
        <div className="chefAiCardContent">
          <p>
            Welcome to ChefAI.recipes blog page! We are dedicated to providing
            our readers with delicious and easy-to-follow recipes, cooking tips,
            and much more. Whether you're a seasoned cook or just starting out
            in the kitchen, we've got you covered.
          </p>
          <p>
            In addition to recipes, we also offer cooking tips and tricks to
            help you become a pro in the kitchen. From knife skills to baking
            techniques, we provide practical advice to help you elevate your
            cooking game.
          </p>
          <p>
            So whether you're looking for inspiration for your next meal or just
            want to learn something new, ChefAI.recipes is the place for you.
            Subscribe to our blog to stay up-to-date on all of our latest
            recipes and cooking tips. Happy cooking!
          </p>

          <p>- Team ChefAI</p>
          <br />
          <BlogList blogs={blogs} />
        </div>
      </div>
    </div>
  );
};
