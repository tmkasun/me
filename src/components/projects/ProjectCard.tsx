import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";
import ShareIcon from "@mui/icons-material/Share";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import dayjs from "dayjs";
import Tooltip from "@mui/material/Tooltip";
import techMap from "./technologiesMap";
import TechnologyIcon from "./TechnologyIcon";
import Box from "@mui/material/Box";
import Link from "../atomic/Link";

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
    const {
        name,
        description,
        createdDate,
        technologies,
        githubURL,
        websiteURL,
    } = project;
    const [expanded, setExpanded] = React.useState(false);

    const theme = useTheme();
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card
            elevation={9}
            sx={{
                width: 300,
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
                        aria-label="Project title"
                    >
                        {name.charAt(0).toUpperCase()}
                    </Avatar>
                }
                title={<Typography variant="h6">{name}</Typography>}
                subheader={dayjs(createdDate).format("MMMM DD, YYYY")}
            />
            <CardContent
                sx={{
                    flexGrow: 1,
                    height: 150,
                    overflow: "auto",
                }}
            >
                <Typography variant="body1" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                {githubURL && (
                    <Link href={githubURL} target="_blank">
                        <Tooltip title="Github repository">
                            <IconButton aria-label="Github Link">
                                <GitHubIcon />
                            </IconButton>
                        </Tooltip>
                    </Link>
                )}

                {websiteURL && (
                    <Link href={websiteURL} target="_blank">
                        <Tooltip title="Website/Demo">
                            <IconButton aria-label="Website Link">
                                <LanguageIcon />
                            </IconButton>
                        </Tooltip>
                    </Link>
                )}

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
                        {technologies.map((technologyKey) => {
                            const technology = techMap[technologyKey];
                            if (!technology) {
                                throw new Error(
                                    `Technology ${technologyKey} not found!\nit must be one of the following: ${Object.keys(
                                        techMap
                                    ).join("\n")}`
                                );
                            }
                            return (
                                <TechnologyIcon
                                    key={technology.name}
                                    name={technology.name}
                                    title={technology.name}
                                    src={
                                        technology.name === "aws" &&
                                        theme.palette.mode === "dark"
                                            ? technology.lightIcon
                                            : technology.icon
                                    }
                                />
                            );
                        })}
                    </Box>
                </CardContent>
            </Collapse>
        </Card>
    );
}
