import bodyParser from "body-parser";
import express from "express";
import fetch from "node-fetch";
global.fetch = fetch;
import URL from "url";
import cors from "cors";
import { createApi } from "unsplash-js";

var app = express();
app.use(cors());
const PORT = process.env.PORT || 5000;

const unsplash = createApi({
  accessKey: "84K-62bUCwMYWCe1BLmkIPSNne2ILre2e5L5h8GV-EA",
});

app.get("/", (req, res) => {
  res.send("hello world");
});

// unsplash.search
//   .getPhotos({
//     query: "bike",
//     page: 1,
//     perPage: 10
//   })
//   .then((result) => {
//     if (result.errors) {
//       // handle error here
//       console.log("error occurred: ", result.errors[0]);
//     } else {
//       // handle success here
//       let photo = result.response;
//       console.log(result);
//     }
//   });

app.listen(8080);
