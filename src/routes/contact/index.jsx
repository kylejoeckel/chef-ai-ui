import { Facebook } from "@mui/icons-material";
import { Button, Typography, Avatar } from "@mui/material";
import { CardHeader } from "../../components/CardHeader";
import "../../Main.css";

export const ContactChefAi = () => {
  return (
    <div className="chefAiContainer">
      <div
        className="chefAiCard"
        style={{ marginTop: "80px", textAlign: "left" }}
      >
        <CardHeader title="contact us" />
        <div className="chefAiCardContent">
          <p>
            You can reach out to us by visiting our{" "}
            <a href="https://www.facebook.com/profile.php?id=100090012759164">
              Facebook page.
            </a>{" "}
            We would love to hear from you! Whether you have a question about
            our products or services, or simply want to share your thoughts, our
            team is always available to assist you. So, please don't hesitate to
            send us a message or leave a comment on our page. We look forward to
            connecting with you!
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
