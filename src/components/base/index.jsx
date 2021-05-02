import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Header from "./Header"
import Grid from "@material-ui/core/Grid"


const useStyles = makeStyles(theme => {
  return ({
    root: {
      flexGrow: 1,
    },
    contentBody: {
      width: '100%',
      marginBottom: theme.spacing(15),
    }
  })
})

/** 
 * title prop is there for backward compatibility, Use headerProps for populating SEO info
*/
export default props => {
  const { children, title, headerProps } = props
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Grid
        container
        direction="column"
        justify="space-between"
        alignItems="stretch"
      >
        <Grid item>
          <Header
            title={title}
            {...headerProps}
          />
        </Grid>
        <Grid className={classes.contentBody} item md={12}>
          {children}
        </Grid>
      </Grid>
    </div>
  )
}
