import { Box, Grid } from "@mui/material";
import React from "react";

type ProjectsPageProps = { projects: any[] };
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
                fooo
            </Grid>
        </Grid>
    );
};

export default ProjectsPage;

export const getStaticProps = async () => {
    return {
        props: {
            projects: [],
        },
    };
};
