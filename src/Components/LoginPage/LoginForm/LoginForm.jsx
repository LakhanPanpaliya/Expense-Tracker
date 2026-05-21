import React, { useState } from "react";
import MailOutline from "@mui/icons-material/MailOutlineOutlined";
import LockOutlined from "@mui/icons-material/LockOutlined";
import Visibility from "@mui/icons-material/VisibilityOutlined";
import ShieldOutlined from "@mui/icons-material/ShieldOutlined";
import Google from "@mui/icons-material/Google";
import SecurityIcon from "@mui/icons-material/Security";
import Apple from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";
import {
  Card,
  Box,
  Typography,
  TextField,
  Button,
  Stack,
  Link,
  Divider,
  InputAdornment,
  Container,
} from "@mui/material";

export default function LoginForm({ userData }) {
  // const [loginFormData, setLoginFormData] = useState({
  //   email: "",
  //   password: "",
  // });

  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget); // Using currentTarget is safer for forms

    const datas = {
      email: data.get("email"),
      password: data.get("password"),
    };

    // setLoginFormData(datas);
    // localStorage.setItem("userAccount", JSON.stringify(datas));
    userData(datas);

    // console.log("Successfully recorded:", datas);
  }

  return (
    <Container
      maxWidth={false}
      sx={{
        display: "flex",
        justifyContent: "center",
        padding: "72px",
        backgroundColor: "#f4f7fe",
      }}
    >
      <Card
        elevation={3}
        sx={{
          width: "100%",
          maxWidth: 440,
          p: 4,
          borderRadius: 4,
          border: "1px solid #e2e8f0",
          backgroundColor: "#ffffff",
        }}
      >
        {/* Main Stack Container */}
        <Stack
          spacing={3}
          sx={{ alignItems: "center", justifyContent: "center" }}
        >
          {/* Shield Icon Badge */}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              mb: 1,
            }}
          >
            <Box
              sx={{
                backgroundColor: "#eff6ff",
                color: "#1e3a8a",
                width: 48,
                height: 48,
                borderRadius: 3,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <SecurityIcon />
            </Box>
          </Box>

          {/* Header Text */}
          <Box sx={{ width: "100%", textAlign: "center" }}>
            <Typography
              variant="h5"
              fontWeight="600"
              color="#1e293b"
              gutterBottom
            >
              Welcome Back
            </Typography>
            <Typography variant="body2" color="#64748b">
              Log in to your{" "}
              <Box component="span" fontWeight="700" color="#0f172a">
                Expensify Pro
              </Box>{" "}
              account
            </Typography>
          </Box>

          {/* Input Fields & Buttons Form Container */}
          <Box component="form" sx={{ width: "100%" }} onSubmit={handleSubmit}>
            <Stack spacing={2.5}>
              {/* Email Field */}
              <Box>
                <Typography
                  variant="body2"
                  fontWeight="500"
                  color="#475569"
                  sx={{ mb: 1 }}
                >
                  Email Address
                </Typography>
                <TextField
                  fullWidth
                  placeholder="name@company.com"
                  variant="outlined"
                  type="email"
                  name="email"
                  required
                  sx={{ "& .MuiOutlinedInput-root": { borderRadius: 2 } }}
                  slotProps={{
                    htmlInput: {
                      pattern: "^[^\\s@]+@[^\\s@]+\\.(com|in|org|co|net|edu|io)$",   
                      title: "Enter valid email address",
                    },
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <MailOutline sx={{ color: "#94a3b8" }} />
                        </InputAdornment>
                      ),
                    },
                  }}
                />
              </Box>

              {/* Password Field */}
              <Box>
                <Box
                  sx={{
                    mb: 1,
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography variant="body2" fontWeight="500" color="#475569">
                    Password
                  </Typography>
                  <Link
                    href="#"
                    variant="body2"
                    fontWeight="500"
                    color="#0f172a"
                    underline="hover"
                  >
                    Forgot password?
                  </Link>
                </Box>
                <TextField
                  fullWidth
                  placeholder="••••••••"
                  type="password"
                  variant="outlined"
                  name="password"
                  required
                  slotProps={{
                    htmlInput: {
                      pattern:
                        "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$",
                      title:
                        "Minimum 8 characters, one capital letter and one number",
                    },
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <LockOutlined sx={{ color: "#94a3b8" }} />
                        </InputAdornment>
                      ),
                    },
                  }}
                />
              </Box>

              {/* Action Buttons */}
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: "#000000",
                  textTransform: "none",
                  fontWeight: "600",
                  borderRadius: 2,
                  py: 1.5,
                  "&:hover": { backgroundColor: "#1e293b" },
                }}
              >
                Sign In
              </Button>

              <Divider sx={{ color: "#94a3b8", fontSize: "0.8rem" }}>
                Or continue with
              </Divider>

              <Button
                variant="outlined"
                fullWidth
                sx={{
                  color: "#0f172a",
                  borderColor: "#cbd5e1",
                  textTransform: "none",
                  borderRadius: 2,
                  py: 1.2,
                }}
              >
                <img
                  src="google-tile.svg"
                  style={{ width: "30px", height: "30px", marginRight: "10px" }}
                />
                Sign in with Google
              </Button>

              <Button
                variant="contained"
                fullWidth
                startIcon={<Apple />}
                sx={{
                  backgroundColor: "#0f172a",
                  textTransform: "none",
                  borderRadius: 2,
                  py: 1.2,
                  "&:hover": { backgroundColor: "#1e293b" },
                }}
              >
                Sign in with Apple
              </Button>

              {/* Footer */}
              <Typography
                variant="body2"
                color="#64748b"
                align="center"
                sx={{ mt: 2 }}
              >
                Don't have an account?{" "}
                <Link
                  href="#"
                  fontWeight="700"
                  color="#000000"
                  underline="hover"
                >
                  <b>Request Access</b>
                </Link>
              </Typography>
            </Stack>
          </Box>
        </Stack>
      </Card>
    </Container>
  );
}
