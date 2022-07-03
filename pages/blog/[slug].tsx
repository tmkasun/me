import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import { getAllPosts, getPostBySlug } from "../../src/data/localMarkdown";
import markdownToHtml from "../../src/markdownToHtml";
import { BlogPost } from "../../src/types/blog";
import Grid from "@mui/material/Grid";
import Link from "../../src/components/atomic/Link";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

interface ExtendedBlogPostType extends BlogPost {
    htmlContent: string;
}
type Props = {
    post: ExtendedBlogPostType;
    preview?: boolean;
};

const Post = ({ post }: Props) => {
    const { htmlContent, title, timeToRead } = post;
    const router = useRouter();
    if (!router.isFallback && !post?.slug) {
        return <ErrorPage statusCode={404} />;
    }
    return (
        <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="stretch"
        >
            <Head>
                <title>{title} | Kasun Thennakoon's Blog space</title>
            </Head>
            <Grid xs={12} item>
                <Box position="fixed">
                    <Link target="_self" href={`/blog`}>
                        <Tooltip title="Back" placement="right">
                            <IconButton aria-label="back" size="small">
                                <ArrowBackIcon
                                    style={{ fontSize: 40 }}
                                    fontSize="inherit"
                                />
                            </IconButton>
                        </Tooltip>
                    </Link>
                </Box>
            </Grid>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="flex-start"
            >
                <Grid item md={7} sm={9} xs={11}>
                    <Typography variant="h2" gutterBottom>
                        {title}
                        <Typography
                            color="textSecondary"
                            variant="subtitle2"
                            gutterBottom
                        >
                            {timeToRead}
                        </Typography>
                    </Typography>
                    <Divider />
                </Grid>
            </Grid>
            <Grid item>
                <Box pt={3} />
            </Grid>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="flex-start"
            >
                <Grid item md={7} sm={9} xs={11}>
                    <div
                        className={"classes.docRoot"}
                        dangerouslySetInnerHTML={{ __html: htmlContent }}
                    />
                </Grid>
                <Grid item md={7} sm={9} xs={11}>
                    <Box mb={3} mt={4}>
                        <Divider />
                        {/* <Giscus
                            id="my-comments"
                            repo="tmkasun/me"
                            repoId="MDEwOlJlcG9zaXRvcnkxNTMzODY1MQ=="
                            category="General"
                            categoryId="DIC_kwDOAOoMm84CPHXb"
                            mapping="pathname"
                            term="Welcome to @giscus/react component!"
                            reactionsEnabled="1"
                            emitMetadata="0"
                            inputPosition="top"
                            theme="light"
                            lang="en"
                            loading="lazy"
                        /> */}
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Post;

type Params = {
    params: {
        slug: string;
    };
};

export async function getStaticProps({ params }: Params) {
    const post = getPostBySlug(params.slug);
    const htmlContent = await markdownToHtml(post.content || "");

    return {
        props: {
            post: {
                ...post,
                htmlContent,
            },
        },
    };
}

export async function getStaticPaths() {
    const posts = getAllPosts();

    return {
        paths: posts.map((post) => {
            return {
                params: {
                    slug: post.slug,
                },
            };
        }),
        fallback: false,
    };
}
