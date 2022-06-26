import * as React from "react";
import { styled } from "@mui/material/styles";
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
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import dayjs from "dayjs";
import AvatarGroup from "@mui/material/AvatarGroup";
import Tooltip from "@mui/material/Tooltip";

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

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      elevation={9}
      sx={{ width: 260, height: 345, display: "flex", flexDirection: "column" }}
    >
      <CardHeader
        avatar={
          <Avatar
            sx={(theme) => ({
              bgcolor: theme.palette.mode === "light" ? blue[700] : blue[200],
            })}
            aria-label="recipe"
          >
            {name.charAt(0).toUpperCase()}
          </Avatar>
        }
        title={name}
        subheader={dayjs(createdDate).format("MMMM DD, YYYY")}
      />
      <CardContent sx={{ flexGrow: 1, overflow: "auto" }}>
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
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Technologies
          </Typography>
          <AvatarGroup spacing={5} max={10} total={24}>
            <Tooltip title="Material UI">
              <Avatar
                sx={{ width: 24, height: 24 }}
                alt="Material UI"
                src="https://mui.com/favicon.ico"
              />
            </Tooltip>
            <Avatar
              sx={{ width: 24, height: 24 }}
              alt="ReactJS"
              src="https://reactjs.org/favicon.ico"
            />
            <Avatar
              sx={{ width: 24, height: 24 }}
              alt="Vercel"
              src="https://assets.vercel.com/image/upload/q_auto/front/favicon/vercel/favicon.ico"
            />
            <Avatar
              sx={{ width: 24, height: 24 }}
              alt="AWS"
              src="https://aws.amazon.com/favicon.ico"
            />
            <Avatar
              sx={{ width: 24, height: 24 }}
              alt="Azure"
              src="https://portal.azure.com/Content/favicon.ico"
            />
            <Avatar
              sx={{ width: 24, height: 24 }}
              alt="React Query"
              src="https://react-query.tanstack.com/_next/static/images/favicon-eed8346421218b24d8fd0fd55c2f9e35.png"
            />
            <Avatar
              sx={{ width: 24, height: 24 }}
              alt="Python"
              src="https://www.python.org/favicon.ico"
            />
          </AvatarGroup>
        </CardContent>
      </Collapse>
    </Card>
  );
}