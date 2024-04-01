import React from "react";
import {
  Container,
  Typography,
  Link,
  Chip,
  ThemeProvider,
  createMuiTheme,
  List,
  ListItem,
  ListItemText,
  Card,
  CardMedia,
  Breadcrumbs,
  CardHeader,
  CardContent, // Import Breadcrumbs component
} from "@material-ui/core";
import getIcon from "../iconMapping";
import ProjectDetails from "./ProjectDetailsBox";
const projectAssetsContext = require.context(
  "../../public/projectAssets",
  true,
  /\.(png|jpe?g|svg)$/
);

const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

function ProjectDetailPage({ project }) {
  const imagePath = `/${project.getSafeName()}/${project.images.banner}`;
  const imageSrc = projectAssetsContext
    .keys()
    .find((key) => key.endsWith(imagePath));
  const imageUrl = imageSrc ? projectAssetsContext(imageSrc) : placeholderImage;
  const ExternalLinkIcon = getIcon("externalLink");
  return (
    <ThemeProvider theme={theme}>
      <Container style={{ margin: "auto", maxWidth: "1280px" }}>
        <Breadcrumbs aria-label="breadcrumb">
          {" "}
          <Link color="inherit" href="/projects">
            Projects
          </Link>{" "}
          <Typography color="textPrimary">{project.name}</Typography>{" "}
        </Breadcrumbs>
        <Typography variant="h2" style={{ marginBottom: "1.2rem" }}>
          {project.name}{" "}
          {ExternalLinkIcon && (
            <Link href={project.link} target="_blank" rel="noopener noreferrer">
              <ExternalLinkIcon
                style={{
                  fontSize: "small",
                  verticalAlign: "top",
                  marginTop: ".5rem",
                }}
              />
            </Link>
          )}{" "}
          {/* Add null check */}
        </Typography>
        <Card style={{ margin: "20px 0  20px 0", borderRadius: "10px" }}>
          <CardMedia
            component="img"
            alt={project.name}
            image={imageUrl}
            style={{
              maxHeight: "400px",
              width: "100%",
              height: "auto",
            }}
          />
        </Card>
        <br /> {/* Add a line break here */}
        <div style={{ display: "flex", gap: "20px", margin: "20px" }}>
          <Card style={{ flex: 2, overflow: "hidden", borderRadius: "5px" }}>
            <CardHeader title="Description" />
            <CardContent style={{}}>
              {" "}
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                style={{ whiteSpace: "pre-line" }}
              >
                {project.project_details.description}
              </Typography>
            </CardContent>
          </Card>
          <ProjectDetails project={project} />
        </div>
        {project.sections.map((section) => (
          <ListItem key={point}>
            <ListItemText primary={`- ${section}`} />
          </ListItem>
        ))}
        {/* {project.sections.map} */}
        <Typography
          variant="body1"
          gutterBottom
          style={{ whiteSpace: "pre-line" }}
        >
          {project.description}
        </Typography>
        <Typography variant="h6" gutterBottom>
          Points:
        </Typography>
        <List>
          {project.points.map((point) => (
            <ListItem key={point}>
              <ListItemText primary={`- ${point}`} />
            </ListItem>
          ))}
        </List>
      </Container>
    </ThemeProvider>
  );
}

export default ProjectDetailPage;
