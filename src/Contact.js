import React, { useState, useRef } from "react";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import {
  TextField,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography,
  Grid,
  Container,
  IconButton,
  Tooltip,
} from "@material-ui/core";
import { blueGrey } from "@material-ui/core/colors";
import getIcon from "./iconMapping"; // Add iconMapping import
import emailjs from "@emailjs/browser";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "100%", // Set the width of the text fields to 100%
    },
    "& .MuiFormControl-root": {
      margin: theme.spacing(1),
    },
    "& .MuiButton-root": {
      margin: theme.spacing(1),
    },
  },
  container: {
    display: "flex",
    justifyContent: "center",
    width: "80vh",
  },
  form: {
    width: "90%",
  },
  socialsContainer: {
    marginTop: theme.spacing(2),
  },
  socialIcon: {
    marginRight: theme.spacing(1),
  },
  radioGroup: {
    marginLeft: theme.spacing(1),
  },
  error: {
    color: "red",
    marginBottom: theme.spacing(1),
  },
}));

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: blueGrey,
  },
});

function Contact({ socials }) {
  const classes = useStyles();
  const [errors, setErrors] = useState({});
  const form = useRef();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;
    const contactReason = form.contactReason.value;

    const newErrors = {};

    if (!name) {
      newErrors.name = "Please enter your name";
    }
    if (!email) {
      newErrors.email = "Please enter your email";
    }
    if (!message) {
      newErrors.message = "Please enter your message";
    } else if (message.length < 50) {
      newErrors.message = "Message should be at least 50 characters long";
    }
    if (!contactReason) {
      newErrors.contactReason = "Please select a contact reason";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Submit the form
      console.log("Form submitted");
      setErrors({});
    }
  };

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    const newErrors = { ...errors };
    if (id === "message" && value.length >= 50) {
      delete newErrors[id];
    } else if (id === "message" && value.length < 50) {
      newErrors[id] = `Message should be at least 50 characters long`;
    } else if (value.trim() === "") {
      newErrors[id] = `Please enter your ${id}`;
    } else {
      delete newErrors[id];
    }
    setErrors(newErrors);
  };

  const renderSocials = () => {
    return (
      <Grid container className={classes.socialsContainer}>
        {socials.map((social) => {
          const Icon = getIcon(social.name);
          return (
            <Grid item key={social.label} className={classes.socialIcon}>
              <Tooltip title={social.label}>
                <IconButton
                  color="primary"
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon />
                </IconButton>
              </Tooltip>
            </Grid>
          );
        })}
      </Grid>
    );
  };

  const sendEmail = () => {
    emailjs
      .sendForm("service_f3zs1p2", "template_gwyk69u", form.current, {
        publicKey: "EyK9cTW9DWyjOm6zT",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Container className={classes.container}>
        <form
          className={`${classes.root} ${classes.form}`}
          noValidate
          autoComplete="off"
          onSubmit={handleFormSubmit}
          ref={form}
        >
          <Typography variant="h4" component="h2">
            Contact Me
          </Typography>
          <Grid container direction="column">
            <Grid item>
              <TextField
                required
                id="name"
                label="Name"
                name="name"
                fullWidth
                error={!!errors.name}
                helperText={errors.name}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item>
              <TextField
                required
                id="email"
                label="Email"
                name="email"
                fullWidth
                error={!!errors.email}
                helperText={errors.email}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item>
              <TextField
                required
                id="message"
                label="Message"
                name="message"
                multiline
                rows={4}
                variant="outlined"
                inputProps={{ minLength: 50 }}
                error={!!errors.message}
                helperText={errors.message}
                onChange={handleInputChange}
              />
            </Grid>
          </Grid>
          <Grid className={classes.radioGroup} container direction="column">
            <Grid item>
              <Typography variant="subtitle1" component="h3">
                Purpose
              </Typography>
            </Grid>

            <Grid item>
              <RadioGroup
                aria-label="contact reason"
                name="contactReason"
                row
                error={!!errors.contactReason}
              >
                <FormControlLabel
                  value="freelance"
                  control={<Radio />}
                  label="Freelance"
                />
                <FormControlLabel
                  value="jobOpportunity"
                  control={<Radio />}
                  label="Job Opportunity"
                />
                <FormControlLabel
                  value="forFun"
                  control={<Radio />}
                  label="For Fun"
                />
              </RadioGroup>
              {errors.contactReason && (
                <Typography
                  variant="caption"
                  className={classes.error}
                  component="p"
                >
                  {errors.contactReason}
                </Typography>
              )}
            </Grid>
          </Grid>
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
          {renderSocials()} {/* Add the socials section */}
        </form>
      </Container>
    </ThemeProvider>
  );
}

export default Contact;
