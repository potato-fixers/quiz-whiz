import { AppBar, Typography, Toolbar, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const [destination, setDestination] = useState("/");
  const navigate = useNavigate();

  const handleClick = (e) => {
    const elText = e.target.innerText;
    switch (elText) {
      case "Dashboard":
        setDestination("/dashboard"); // user dashboard page
        break;
      case "Create":
        setDestination("/"); // No route yet
        break;
      case "SIGN UP":
        setDestination("/register"); // register page
        break;
      case "SIGN IN":
        setDestination("/login"); // login page
        break;
      default:
        setDestination("/"); // Home/landing page
        break;
    }
  };

  useEffect(() => {
    // Check if the current screen if a Take Quiz Screen
    // If it is, do NOT redirect to home page on refresh
    const urlRegex = /^(quiz)(?:\/)?(?:.*)?/i;
    if (window.location.href.match(urlRegex)) {
      // Otherwise, redirect like normal
      navigate(destination);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [destination]);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h4" onClick={handleClick}>
          Quiz Whiz
        </Typography>

        <Typography variant="h6" onClick={handleClick}>
          Dashboard
        </Typography>

        <Typography variant="h6" sx={{ flexGrow: 1 }} onClick={handleClick}>
          Create
        </Typography>

        <Button color="inherit" onClick={handleClick}>
          {" "}
          Sign Up{" "}
        </Button>
        <Button color="inherit" onClick={handleClick}>
          {" "}
          Sign In{" "}
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
