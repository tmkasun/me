import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import GitHubIcon from "@mui/icons-material/GitHub";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { blue, red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import dayjs from "dayjs";
import AvatarGroup from "@mui/material/AvatarGroup";
import Tooltip from "@mui/material/Tooltip";
import techMap from "./technologiesMap";
import TechnologyIcon from "./TechnologyIcon";
import Box from "@mui/material/Box";

export interface Project {
    name: string;
    description: string;
    technologies: Array<string>;
    githubURL?: string;
    websiteURL?: string;
    imageURL?: string;
    tags?: string[];
    createdDate: string;
}

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function ProjectCard({ project }: { project: Project }) {
    const { name, description, createdDate } = project;
    const [expanded, setExpanded] = React.useState(false);

    const theme = useTheme();
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card
            elevation={9}
            sx={{
                width: 260,
                display: "flex",
                flexDirection: "column",
            }}
        >
            <CardHeader
                avatar={
                    <Avatar
                        sx={(theme) => ({
                            bgcolor:
                                theme.palette.mode === "light"
                                    ? blue[700]
                                    : blue[200],
                        })}
                        aria-label="recipe"
                    >
                        {name.charAt(0).toUpperCase()}
                    </Avatar>
                }
                title={name}
                subheader={dayjs(createdDate).format("MMMM DD, YYYY")}
            />
            <CardContent
                sx={{
                    flexGrow: 1,
                    height: 245,
                    overflow: "auto",
                }}
            >
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <GitHubIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <Box display="flex" flexGrow={1} justifyContent="flex-end">
                    <Tooltip title="Technologies">
                        <Box display="flex">
                            <ExpandMore
                                expand={expanded}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="Technologies"
                            >
                                <ExpandLessIcon />
                            </ExpandMore>
                        </Box>
                    </Tooltip>
                </Box>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent sx={{ pt: 0 }}>
                    <Typography
                        gutterBottom
                        variant="body2"
                        color="text.secondary"
                    >
                        Technologies
                    </Typography>
                    <Box
                        display="flex"
                        sx={{
                            flexDirection: "row",
                            flexWrap: "wrap",
                            justifyContent: "space-around",
                            rowGap: "0.3em",
                            columnGap: "0.4em",
                        }}
                    >
                        {Object.entries(techMap).map(([key, value]) => (
                            <TechnologyIcon
                                key={key}
                                name={key}
                                title={value.name}
                                src={
                                    key === "aws" &&
                                    theme.palette.mode === "dark"
                                        ? value.lightIcon?.src
                                        : value.icon.src
                                }
                            />
                        ))}
                    </Box>
                </CardContent>
            </Collapse>
        </Card>
    );
}
