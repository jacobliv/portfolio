// Header.js
import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Snackbar,
} from "@material-ui/core";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import { blueGrey } from "@material-ui/core/colors";
import MuiAlert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    userSelect: "none",
    cursor: "pointer",
  },
  snackbar: {
    position: "absolute",
  },
  alert: {
    "& .MuiAlert-action": {
      display: "none",
    },
    "& .MuiAlert-message": {
      fontSize: "0.6rem", // Adjust this value to change the size of the text
    },
    padding: "0px 2px", // Adjust these values to change the padding of the alert
    lineHeight: 1, // Adjust this value to change the line-height of the alert
  },
  navButtons: {
    marginLeft: "auto",
  },
}));

function TransitionLeft(props) {
  return <Slide {...props} direction="left" />;
}

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: blueGrey,
  },
});

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" icon={false} {...props} />;
}

function Header() {
  const classes = useStyles();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [snackbarStyle, setSnackbarStyle] = useState({});
  const nameRef = useRef(null);

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText("Jake Livingston");
      const rect = nameRef.current.getBoundingClientRect();
      const offset = 20; // Change this value to adjust the offset
      setSnackbarStyle({
        top: `${rect.top - 20}px`,
        left: `${rect.right + offset}px`,
      });
      setOpen(true);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h6"
              className={classes.title}
              onClick={handleClick}
              ref={nameRef}
            >
              Jake Livingston
            </Typography>
            <Snackbar
              open={open}
              autoHideDuration={1000}
              onClose={handleClose}
              className={classes.snackbar}
              style={snackbarStyle}
            >
              <Alert
                onClose={handleClose}
                severity="success"
                style={{ backgroundColor: "#333", color: "#fff" }}
                className={classes.alert}
              >
                Copied!
              </Alert>
            </Snackbar>
            <div className={classes.navButtons}>
              <Button
                color={location.pathname === "/" ? "inherit" : "default"}
                component={Link}
                to="/"
              >
                Home
              </Button>
              <Button
                color={location.pathname === "/about" ? "inherit" : "default"}
                component={Link}
                to="/about"
              >
                About Me
              </Button>
              <Button
                color={
                  location.pathname === "/projects" ? "inherit" : "default"
                }
                component={Link}
                to="/projects"
              >
                Projects
              </Button>
              <Button
                color={location.pathname === "/contact" ? "inherit" : "default"}
                component={Link}
                to="/contact"
              >
                Contact
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </ThemeProvider>
  );
}

export default Header;
