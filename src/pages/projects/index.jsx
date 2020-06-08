import React from "react"
import Base from "../../components/base/index"
import Projects from "../../components/projects/index"
import MyTitle from "../../components/landing/MyTitle"
import Grid from "@material-ui/core/Grid"
import Divider from "@material-ui/core/Divider"

export default props => {
  return (
    <Base headerProps={{title: "Kasun Thennakoon's personal projects"}}>
       <Grid
        container
        spacing={0}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item md={3} sm={1} xs={false} />
        <Grid item md={6} sm={10} xs={12}>
          <MyTitle>My personal projects</MyTitle>
          <Divider />
          <Projects />
        </Grid>
        <Grid item md={3} sm={1} xs={false} />
      </Grid>
    </Base>
  )
}
