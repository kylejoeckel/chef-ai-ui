import React from "react";
import { Typography } from "@mui/material";
import "../../Main.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CardHeader } from "../../components/CardHeader";

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
        <CardHeader title="Page Not Found" />
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
