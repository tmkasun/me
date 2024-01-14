import { Box, Divider, Grid } from "@mui/material";
import React from "react";
import MyTitle from "../../src/components/atomic/MyTitle";
import BlogPreview from "../../src/components/blog/BlogPreview";
import { getAllPosts } from "../../src/data/localMarkdown";
import { BlogPost } from "../../src/types/blog";

type ProjectsPageProps = { allPosts: BlogPost[] };
const ProjectsPage: React.FC<ProjectsPageProps> = ({ allPosts }) => {
    return (
        <Grid
            container
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
        >
            <Grid item md={8} sm={10} xs={12}>
                <Box mb={4}>
                    <MyTitle>Kasun Thennakoon&apos;s personal Blog</MyTitle>
                    <Divider />
                </Box>
                <Grid
                    container
                    item
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    spacing={6}
                >
                    {allPosts.map((post) => (
                        <BlogPreview key={post.slug} post={post} />
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
};

export default ProjectsPage;

export const getStaticProps = async () => {
    const allPosts = getAllPosts();
    return {
        props: { allPosts },
    };
};
