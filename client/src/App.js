import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "../src/components/Header";
import Grid from "@material-ui/core/Grid";
import Slides from "./components/Slides";
import Category from "./components/Category";
import FolderIcon from "@material-ui/icons/Folder";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Files from "./components/Files";
import Images from "./components/Images";

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
                spacing={10}
                direction="column"
                justifyContent="space-between"
                alignItems="center" 
              >
                <Grid item >
                  <Category />
                </Grid>
                <hr />
                <Grid item >
                  <Files />
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
                  <Images />
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
