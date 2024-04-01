import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";
function ProjectDetails({ project }) {
  return (
    <Card
      style={{
        flex: 1,
        overflow: "hidden",
        borderRadius: "5px",
        // padding: "16px",
      }}
    >
      <CardHeader title="Project Details" />
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
                <Typography variant="subtitle2" component="span" key={index}>
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
                <Typography variant="subtitle2" component="span" key={index}>
                  {item}
                  {index < project.project_details.tools.length - 1 ? ", " : ""}
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
  );
}
export default ProjectDetails;
