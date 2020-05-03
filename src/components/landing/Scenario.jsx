import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import { withPrefix } from "gatsby"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import Divider from "@material-ui/core/Divider"
import Link from "@material-ui/core/Link"

const useStyles = makeStyles({
  root: {
    maxWidth: 275,
    boxShadow: 0,
    transition: "box-shadow 1s",
    "&:hover": {
      boxShadow: "0px 0px 11px 1px rgba(13, 59, 72, 0.68)",
    },
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  cardContent: {
    height: "200px",
  },
})

export default function Scenario(props) {
  const { node } = props
  const {
    excerpt,
    frontmatter: { title, date, summary },
    fields: { slug },
  } = node
  const classes = useStyles()

  return (
    <Grid item>
      <Card elevation={0} className={classes.root}>
        <CardActionArea>
          <CardContent className={classes.cardContent}>
            <Typography variant="subtitle1" component="h2">
              {title}
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                {summary}
              </Typography>
            </Typography>
            <Divider light />
            <Typography variant="body2" component="section">
              {excerpt}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link href={withPrefix(slug)}>Discover</Link>
        </CardActions>
      </Card>
    </Grid>
  )
}
