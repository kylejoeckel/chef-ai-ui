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
import { useEffect } from "react";
import { useState } from "react";
import "../../Main.css";
import useUserStore from "../../state/userState";
import { useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";

export const SignUp = () => {
  const [pwrd, setPwrd] = useState(undefined);
  const [pwrdConf, setPwrdConf] = useState(undefined);
  const [email, setEmail] = useState(undefined);
  const [showPassword, setShowPwrd] = useState(false);
  const [showConfPassword, setConfShowPwrd] = useState(false);

  const { signUp, loading, error, loggedIn } = useUserStore();
  const navigate = useNavigate();
  const submit = async () => {
    const user = { email, password: pwrd };
    if (pwrd && pwrdConf && email && pwrd === pwrdConf) {
      await signUp(user);
      navigate("/");
    }
  };
  const validEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const [formValid, setFormValid] = useState(false);
  useEffect(() => {
    setFormValid(pwrd && pwrdConf && email && pwrd === pwrdConf);
  }, [pwrd, pwrdConf, email]);
  useEffect(() => {
    if (loggedIn) navigate("/");
  }, [loggedIn]);
  return (
    <div className="chefAiContainer" style={{ paddingTop: "80px" }}>
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
            &nbsp;create account{" "}
          </h2>
        </div>
        <div className="chefAiCardContent">
          <div className="chefAiCredentials">
            <h5>Why create an account?</h5>

            <p style={{ fontSize: "smaller" }}>
              Creating an account with Chef AI Recipes allows you to save all
              your favorite recipes in one convenient location, making it easy
              to access and reference them later. You can access your saved
              recipes anytime, anywhere, without having to search through
              multiple sources. Additionally, with your account, you can use
              your saved recipes as a shopping list. This saves you time and
              effort in having to write down the ingredients you need for each
              recipe. Having an account with Chef AI Recipes is the perfect way
              to keep track of all your favorite recipes and make meal planning
              and grocery shopping a breeze.
            </p>
            {/* <h6>Thank you!</h6> */}
            <br />
            <TextField
              className="chefAiCredentialField"
              variant="outlined"
              error={!validEmail(email)}
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
              />
            </FormControl>
            <FormControl className="chefAiCredentialField" variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password Confirmation
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showConfPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() =>
                        setConfShowPwrd(
                          (showConfPassword) =>
                            (showConfPassword = !showConfPassword)
                        )
                      }
                      //   onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showConfPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password Confirmation"
                onChange={(e) => {
                  setPwrdConf(e.target.value);
                }}
              />
            </FormControl>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <LoadingButton
              disabled={!formValid}
              label="Sign Up"
              onClick={() => submit()}
              loading={loading}
            >
              Sign Up
            </LoadingButton>
            <br />
            <Link
              href="/log-in"
              style={{
                width: "100%",
                margin: "0 auto",
                textAlign: "center",
                fontSize: "smaller",
              }}
            >
              Already have an account?
              <br />
              Log In here
            </Link>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};
