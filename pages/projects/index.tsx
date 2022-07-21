import { Box, Grid } from "@mui/material";
import React from "react";
import projectsData from "../../resources/projects/projectsData.json";
import ProjectCard, {
    Project,
} from "../../src/components/projects/ProjectCard";

type ProjectsPageProps = { projects: Project[] };
const ProjectsPage: React.FC<ProjectsPageProps> = ({ projects }) => {
    return (
        <Grid
            container
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
        >
            <Grid
                direction="row"
                justifyContent="center"
                alignItems="center"
                container
                item
                sx={{
                    width: "70%",
                }}
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
