import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useEffect } from "react";
import { useState } from "react";
import "../../Main.css";
import useUserStore from "../../state/userState";
import { useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { CardHeader } from "../../components/CardHeader";
import AdBox from "../../components/AdBox";

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
        <CardHeader title={"log-in"} />
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
            <AdBox />
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
