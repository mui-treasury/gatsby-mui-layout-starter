import React from "react"
import { Link } from "gatsby"
import { Grid } from "@material-ui/core"
import logo from "../assets/logo.svg"
import "../assets/App.css"

const IndexPage = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>@mui-treasury/layout starter</p>
      <Grid container spacing={4} justify="center">
        <Grid item>
          <Link className="App-link" to="/dashboard">
            Dashboard
          </Link>
        </Grid>
        <Grid item>
          <Link className="App-link" to="/blog">
            Blog
          </Link>
        </Grid>
      </Grid>
    </header>
  </div>
)

export default IndexPage
