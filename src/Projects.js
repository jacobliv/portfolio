import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  createMuiTheme,
  ThemeProvider,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";
const projectAssetsContext = require.context(
  "../public/projectAssets",
  true,
  /\.(png|jpe?g|svg)$/
);

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    background: {
      default: "#333",
      paper: "#424242",
    },
  },
});

const useStyles = makeStyles({
  link: {
    textDecoration: "none",
    "&:hover": {
      backgroundColor: "#616161",
    },
  },
});

const placeholderImage = "https://via.placeholder.com/140";

function Projects({ projects }) {
  const classes = useStyles();

  return (
    <ThemeProvider theme={darkTheme}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {projects.map((project, index) => {
          const imagePath = `/${project.getSafeName()}/${project.images.card}`;
          const imageSrc = projectAssetsContext
            .keys()
            .find((key) => key.endsWith(imagePath));
          const imageUrl = imageSrc
            ? projectAssetsContext(imageSrc)
            : placeholderImage;

          return (
            <Card
              key={index}
              component={Link}
              to={`/projects/${project.getSafeName()}`}
              style={{ minWidth: 500, maxWidth: 500, margin: 10 }}
              className={classes.link}
            >
              <CardMedia
                component="img"
                alt={project.name}
                height="140"
                image={imageUrl}
                title={project.name}
                style={{
                  ...(project.scaleToFit ? { objectFit: "contain" } : {}),
                  padding: "20px", // Adjust this value to increase or decrease the space around the image
                  boxSizing: "border-box", // Ensures padding is included in the height/width calculations
                }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {project.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {project.shortDescription}
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </ThemeProvider>
  );
}

export default Projects;
