import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import { getAllPosts, getPostBySlug } from "../../src/data/localMarkdown";
import { BlogPost } from "../../src/types/blog";
import Grid from "@mui/material/Grid";
import Link from "../../src/components/atomic/Link";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import dynamic from "next/dynamic";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { styled } from "@mui/material";
import Giscus from "@giscus/react";
import CustomSandpack from "../../src/components/blog/CustomSandpack";
import rehypeMetaAsAttributes from '../../src/data/rehypeCodeMetaExtractor';

const StyledImage = styled("span")({
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
});

const components: any = {
    a: Link as any,
    img: ({ src, height, width, ...rest }: any) => (
        // layout="responsive" makes the image fill the container width wise - I find it looks nicer for blog posts
        <StyledImage>
            <img width="90%" src={src} {...rest} />
        </StyledImage>
    ),
    // It also works with dynamically-imported components, which is especially
    // useful for conditionally loading components for certain routes.
    // See the notes in README.md for more details.
    // code: dynamic(import("../../src/components/blog/CustomSandpack")),
    Head,
};

type Props = {
    post: BlogPost;
    mdxSource: MDXRemoteSerializeResult<Record<string, unknown>>;
};

const Post = ({ mdxSource, post }: Props) => {
    const { content, title, timeToRead } = post;
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
                    </Typography>
                    <Typography
                        color="textSecondary"
                        variant="subtitle2"
                        gutterBottom
                    >
                        {timeToRead}
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
                <Grid
                    item
                    md={7}
                    sm={9}
                    xs={11}
                    sx={{
                        fontFamily: "Roboto",
                        fontSize: "1.5em",
                        fontWeight: "100",
                    }}
                >
                    {/* <div
                        className={"classes.docRoot"}
                        dangerouslySetInnerHTML={{ __html: htmlContent }}
                    /> */}
                    {/* <ReactMarkdown children={content} components={renderers} /> */}
                    <MDXRemote {...mdxSource} components={components} />
                </Grid>
                <Grid item md={7} sm={9} xs={11}>
                    <Box mb={3} mt={4}>
                        <Divider />
                        <Giscus
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
                        />
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
    const mdxSource = await serialize(post.content, {
        // Optionally pass remark/rehype plugins
        mdxOptions: {
            remarkPlugins: [],
            rehypePlugins: [rehypeMetaAsAttributes],
        },
    });

    return {
        props: {
            mdxSource,
            post,
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
