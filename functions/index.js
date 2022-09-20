const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

const app = express();

// eslint-disable-next-line object-curly-spacing
app.use(cors({ origin: "*" }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

const exploreDatafetchUrl = "https://api.npoint.io/d735a6e03189436ff01e";
app.get("/fetchExploreData", async (req, res) => {
  const response = await fetch(exploreDatafetchUrl);
  const responseJson = await response.json();
  res.json(responseJson);
});

const bigCardDataFetchUrl = "https://api.npoint.io/0051a58f04f0f49eaf12";
app.get("/fetchBigCardData", async (req, res) => {
  const response = await fetch(bigCardDataFetchUrl);
  const responseJson = await response.json();
  res.json(responseJson);
});

// const searchDataFetchUrl = "https://jsonkeeper.com/b/5NPS";
// https://jsonkeeper.com/b/76O6
const searchDataFetchUrl = "https://api.npoint.io/264d42015fe1ee1cb90d";
app.get("/fetchSearchDataLondon", async (req, res) => {
  const response = await fetch(searchDataFetchUrl);
  const responseJson = await response.json();
  res.json(responseJson);
});

exports.api = functions.https.onRequest(app);
