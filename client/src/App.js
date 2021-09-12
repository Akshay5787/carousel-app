import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "../src/components/Header";
import Grid from "@material-ui/core/Grid";
import Slides from "./components/Slides"


import Container from "@material-ui/core/Container";
const App = () => {
  return (
    <div>
      <React.Fragment>
        <CssBaseline />
        <Header />
        <div
          style={{
            height: "10%",
            marginTop: "5%",
          }}
        >
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <Grid xs={3}>
              <Grid
                container
                direction="column"
                justifyContent="space-between"
                alignItems="center"
              >
                <Grid item>
                  <h1 style={{ backgroundColor: "red" }}>help</h1>
                </Grid>
                <Grid item>
                  <h1 style={{ backgroundColor: "blue" }}>help</h1>
                </Grid>
              </Grid>
            </Grid>

            <Grid xs={9}>
              <Grid 
                container
                direction="column"
                justifyContent="flex-end"
                alignItems="center"
              >
                <Grid>
                <Slides />;
                </Grid>
                <Grid>
                  <h1 style={{ backgroundColor: "black" }}>help</h1>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    </div>
  );
};

export default App;
