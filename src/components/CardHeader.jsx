import { Typography } from "@mui/material";
import "../Main.css";
export const CardHeader = (props) => {
  const { title } = props;
  return (
    <div className="chefAICardHeader">
      <h2>
        <Typography
          variant="h2"
          component="div"
          sx={{
            color: "white",
            width: "100%",
            textAlign: "center",
            fontFamily: "Lato",
          }}
        >
          Chef
          <span
            style={{
              fontWeight: "800",
              color: "#9FAFA1",
              fontFamily: "Lato",
              textShadow: "2px 2px 2px rgba(0,0,0,0.6)",
            }}
          >
            AI
          </span>
        </Typography>
        &nbsp;{title}
      </h2>
    </div>
  );
};
