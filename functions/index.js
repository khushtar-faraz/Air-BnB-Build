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

const exploreDatafetchUrl = "https://jsonkeeper.com/b/4G1G";
app.get("/fetchExploreData", async (req, res) => {
  const response = await fetch(exploreDatafetchUrl);
  const responseJson = await response.json();
  res.json(responseJson);
});

const bigCardDataFetchUrl = "https://jsonkeeper.com/b/VHHT";
app.get("/fetchBigCardData", async (req, res) => {
  const response = await fetch(bigCardDataFetchUrl);
  const responseJson = await response.json();
  res.json(responseJson);
});

// const searchDataFetchUrl = "https://jsonkeeper.com/b/5NPS";
const searchDataFetchUrl = " https://jsonkeeper.com/b/76O6";
app.get("/fetchSearchDataLondon", async (req, res) => {
  const response = await fetch(searchDataFetchUrl);
  const responseJson = await response.json();
  res.json(responseJson);
});

exports.api = functions.https.onRequest(app);
