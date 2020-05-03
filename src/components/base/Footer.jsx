import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Grid from "@material-ui/core/Grid"
import Link from "@material-ui/core/Link"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

export default function Footer() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar elevation={0} color="default" position="relative">
        <Toolbar>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid item>
              <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
                spacing={2}
              >
                <Grid item>
                  <Link>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Privacy
                    </Typography>
                  </Link>
                </Grid>
                <Grid item>
                  <Link>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Legal
                    </Typography>
                  </Link>
                </Grid>
                <Grid item>
                  <Link>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Contact
                    </Typography>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
              >
                <Grid item>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    © 2020 MyDomain.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  )
}
