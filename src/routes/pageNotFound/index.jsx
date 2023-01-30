import React from "react";
import { Typography } from "@mui/material";
import "../../Main.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 5000);
  });
  return (
    <div className="chefAiContainer">
      <div className="chefAiCard">
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
            &nbsp;Page not found{" "}
          </h2>
        </div>

        <div className="chefAiCardContent">
          <p>
            You should be redirected shortly, otherwise click{" "}
            <a href="/">here!</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
