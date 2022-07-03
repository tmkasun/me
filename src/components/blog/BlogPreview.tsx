import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import { BlogPost } from "../../types/blog";
import { blue } from "@mui/material/colors";
import Link from "../atomic/Link";

dayjs.extend(relativeTime);
type BlogPreviewProps = {
    post: BlogPost;
};
const BlogPreview: React.FC<BlogPreviewProps> = ({ post }) => {
    const { title, slug, excerpt, timeToRead, date } = post;
    return (
        <Grid
            container
            item
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
            spacing={0}
        >
            <Divider
                sx={(theme) => ({
                    width: 2,
                    backgroundColor:
                        theme.palette.mode === "light" ? blue[300] : blue[700],
                })}
                orientation="vertical"
                flexItem
            />

            <Grid item md={7} sm={8} xs={9}>
                <Grid
                    container
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="stretch"
                    spacing={2}
                >
                    <Grid item>
                        <Link target="_self" href={`/blog/${slug}`}>
                            <Typography
                                sx={(theme) => {
                                    const underlineBackgroundColor =
                                        theme.palette.mode === "light"
                                            ? "#fbff00ab"
                                            : "#72c5ee36";
                                    return {
                                        flex: 1,
                                        borderRadius: 8,
                                        paddingLeft: 3,
                                        paddingRight: 2,
                                        marginRight: -2,
                                        marginLeft: -3,
                                        fontSize: "2em",
                                        lineHeight: "1.2",
                                        textDecoration: "none",
                                        backgroundImage: `linear-gradient(to right, ${underlineBackgroundColor} 0, ${underlineBackgroundColor} 100%)`,
                                        backgroundSize: "0 100%",
                                        backgroundRepeat: "no-repeat",
                                        transition: "background .5s",
                                        "&:hover": {
                                            backgroundSize: "100% 100%",
                                        },
                                    };
                                }}
                                variant="h5"
                            >
                                {title}
                            </Typography>
                        </Link>
                    </Grid>
                    <Grid item>
                        <Typography variant="h6">
                            <Box
                                fontWeight="fontWeightLight"
                                fontStyle="oblique"
                            >
                                {excerpt}
                            </Box>
                            <Typography
                                variant="caption"
                                display="block"
                                gutterBottom
                            >
                                <Box
                                    display="flex"
                                    flexDirection="row"
                                    justifyContent="space-between"
                                >
                                    <Box
                                        fontFamily="Monospace"
                                        fontWeight="fontWeightBold"
                                        fontSize={13}
                                        color="text.secondary"
                                    >
                                        {timeToRead}
                                    </Box>
                                </Box>
                            </Typography>
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item md={3} sm={2} xs={2}>
                <Box display="flex" justifyContent="flex-end">
                    <Typography variant="caption">
                        <Tooltip title={date} placement="top-start">
                            <i> {dayjs().to(dayjs(date, "MMMM DD, YYYY"))}</i>
                        </Tooltip>
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    );
};

export default BlogPreview;
