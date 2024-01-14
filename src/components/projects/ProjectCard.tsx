import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import dayjs from "dayjs";
import Tooltip from "@mui/material/Tooltip";
import techMap from "./technologiesMap";
import TechnologyIcon from "./TechnologyIcon";
import Box from "@mui/material/Box";
import Link from "../atomic/Link";
import { Button, ButtonGroup } from "@mui/material";

export interface Project {
    name: string;
    description: string;
    technologies: Array<keyof typeof techMap>;
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
        imageURL,
    } = project;
    const [expanded, setExpanded] = React.useState(false);

    const theme = useTheme();
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card
            elevation={2}
            sx={(theme) => ({
                width: 300,
                display: "flex",
                flexDirection: "column",
                borderRadius: "16px",
                boxShadow:
                    theme.palette.mode === "light"
                        ? null
                        : "0px 0px 5px 2px #5b5d6ec4",
            })}
        >
            <CardHeader
                avatar={
                    <Avatar
                        sx={(theme) => ({
                            padding: imageURL ? "3px" : "initial",
                            border: imageURL
                                ? "1px solid #b9c8e9"
                                : "1px solid #051537",
                            bgcolor: imageURL
                                ? "white"
                                : theme.palette.mode === "light"
                                ? "#051537"
                                : "whitesmoke",
                        })}
                        aria-label="Project title"
                        src={imageURL}
                    >
                        {!imageURL && name.charAt(0).toUpperCase()}
                    </Avatar>
                }
                title={<Typography variant="h6">{name}</Typography>}
                subheader={dayjs(createdDate).format("MMMM DD, YYYY")}
            />
            <CardContent
                sx={{
                    flexGrow: 1,
                    height: 150,
                    overflow: "hidden",
                    "&:hover": {
                        overflowY: "auto",
                    },
                    "&::-webkit-scrollbar": {
                        width: "0.35em",
                        height: "0em",
                    },
                    "&::-webkit-scrollbar-track": {
                        backgroundColor: "#fff",
                    },
                    "&::-webkit-scrollbar-thumb": {
                        backgroundColor: "#8D91A3",
                        borderRadius: "5px",
                    },
                }}
            >
                <Typography variant="body1" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <ButtonGroup
                    size="small"
                    disableFocusRipple
                    disableRipple
                    variant="text"
                    aria-label="text button group"
                >
                    {githubURL && (
                        <Button
                            sx={{
                                textTransform: "none",
                            }}
                            href={githubURL}
                            target="_blank"
                            startIcon={<GitHubIcon />}
                        >
                            Source
                        </Button>
                    )}
                    {websiteURL && (
                        <Button
                            href={websiteURL}
                            target="_blank"
                            sx={{
                                textTransform: "none",
                            }}
                            endIcon={<OpenInNewIcon fontSize="small" />}
                        >
                            Try
                        </Button>
                    )}
                </ButtonGroup>
                {/* <Box display="flex" flexGrow={1} justifyContent="flex-end">
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
                </Box> */}
            </CardActions>
            <CardContent sx={{ pt: 0 }}>
                <Typography gutterBottom variant="body2" color="text.secondary">
                    Technologies
                </Typography>
                <Box
                    display="flex"
                    sx={{
                        flexDirection: "row",
                        flexWrap: "wrap",
                        justifyContent: "flex-start",
                        rowGap: "0.3em",
                        columnGap: "1.4em",
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
        </Card>
    );
}
