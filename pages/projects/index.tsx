import { Box, Grid } from "@mui/material";
import React from "react";
import projectsData from "../../resources/projects/data.json";
import ProjectCard, { Project } from "../../src/components/projects/ProjectCard";

type ProjectsPageProps = { projects: Project[] };
const ProjectsPage: React.FC<ProjectsPageProps> = ({ projects }) => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid
        direction="row"
        justifyContent="center"
        alignItems="center"
        container
        item
      >
        {projects.map((project) => (
          <Box key={project.name} display="flex" m={3}>
            <ProjectCard project={project} />
          </Box>
        ))}
      </Grid>
    </Grid>
  );
};

export default ProjectsPage;

export const getStaticProps = async () => {
  return {
    props: {
      projects: projectsData,
    },
  };
};
