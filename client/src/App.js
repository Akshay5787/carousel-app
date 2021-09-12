import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "../src/components/Header";
import Grid from "@material-ui/core/Grid";

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
              <h1 style={{ backgroundColor: "green" }}>please help</h1>
            </Grid>

            <Grid xs={9}>
              <h1 style={{ backgroundColor: "blue" }}>please help</h1>
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    </div>
  );
};

export default App;
