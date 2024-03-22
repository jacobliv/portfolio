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
  CardContent, // Import Breadcrumbs component
} from "@material-ui/core";
import getIcon from "./iconMapping";
import { CardHeader, CardText } from "react-bootstrap";
const projectAssetsContext = require.context(
  "../public/projectAssets",
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
      <Container style={{ margin: "16px" }}>
        <Breadcrumbs aria-label="breadcrumb">
          {" "}
          {/* Add Breadcrumbs component */}
          <Link color="inherit" href="/projects">
            Projects
          </Link>{" "}
          {/* Add the first breadcrumb */}
          <Typography color="textPrimary">{project.name}</Typography>{" "}
          {/* Add the second breadcrumb */}
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
        <div style={{ display: "flex", gap: "20px", margin: "20px" }}>
          <Card style={{ flex: 2, overflow: "hidden", borderRadius: "5px" }}>
            <CardHeader>Description</CardHeader>
            <CardContent style={{}}>
              {" "}
              {/* Added consistent padding */}
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
          <Card
            style={{
              flex: 1,
              overflow: "hidden",
              borderRadius: "5px",
              // padding: "16px",
            }}
          >
            <CardHeader>Project Details</CardHeader>
            <CardContent style={{ padding: "16px" }}>
              {" "}
              {/* Added consistent padding */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  style={{ marginRight: "10px" }}
                >
                  Languages:
                </Typography>
                <div>
                  {project.project_details.languages.map((item, index) => {
                    return (
                      <Typography
                        variant="subtitle2"
                        component="span"
                        key={index}
                      >
                        {item}
                        {index < project.project_details.languages.length - 1
                          ? ", "
                          : ""}
                      </Typography>
                    );
                  })}
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  style={{ marginRight: "10px" }}
                >
                  Tools:
                </Typography>
                <div>
                  {project.project_details.tools.map((item, index) => {
                    return (
                      <Typography
                        variant="subtitle2"
                        component="span"
                        key={index}
                      >
                        {item}
                        {index < project.project_details.tools.length - 1
                          ? ", "
                          : ""}
                      </Typography>
                    );
                  })}
                </div>
              </div>
              <div>
                <Typography
                  variant="subtitle2"
                  color="textSecondary"
                  component="span"
                  style={{ marginRight: "10px" }}
                >
                  Team Size:
                </Typography>
                <Typography variant="subtitle2" component="span">
                  {project.project_details.team_size}
                </Typography>
              </div>
              <div>
                <Typography
                  variant="subtitle2"
                  color="textSecondary"
                  component="span"
                  style={{ marginRight: "10px" }}
                >
                  Role:
                </Typography>
                <Typography variant="subtitle2" component="span">
                  {project.project_details.role}
                </Typography>
              </div>
            </CardContent>
          </Card>
        </div>
        <br /> {/* Add a line break here */}
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
