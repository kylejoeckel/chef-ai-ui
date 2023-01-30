import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useEffect } from "react";
import { useState } from "react";
import "../../Main.css";
import useUserStore from "../../state/userState";
import { useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export const LogIn = () => {
  const [pwrd, setPwrd] = useState(undefined);
  const [email, setEmail] = useState(undefined);
  const [showPassword, setShowPwrd] = useState(false);
  const { logIn, loading, error, loggedIn } = useUserStore();
  const navigate = useNavigate();
  const submit = async () => {
    const user = { email, password: pwrd };
    await logIn(user);
  };
  const [formValid, setFormValid] = useState(false);
  useEffect(() => {
    setFormValid(pwrd && email);
  }, [pwrd, email]);
  useEffect(() => {
    if (loggedIn) navigate("/");
  }, [loggedIn]);
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
            &nbsp;login{" "}
          </h2>
        </div>
        <div className="chefAiCardContent">
          <div className="chefAiCredentials">
            <TextField
              className="chefAiCredentialField"
              variant="outlined"
              label="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <FormControl className="chefAiCredentialField" variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() =>
                        setShowPwrd(
                          (showPassword) => (showPassword = !showPassword)
                        )
                      }
                      //   onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
                onChange={(e) => {
                  setPwrd(e.target.value);
                }}
                onKeyUp={(e) => {
                  if (e.key === "Enter" && formValid) {
                    submit();
                  }
                }}
              />
            </FormControl>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <LoadingButton
              disabled={!formValid}
              label="Log In"
              onClick={() => submit()}
              loading={loading}
            >
              {" "}
              Log In
            </LoadingButton>
            <br />
            <Link
              style={{
                width: "100%",
                margin: "0 auto",
                textAlign: "center",
                fontSize: "smaller",
              }}
              href="/sign-up"
            >
              Create an account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
