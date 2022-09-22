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
const searchDataFetchUrlLondon = "https://api.npoint.io/264d42015fe1ee1cb90d";
app.get("/fetchSearchDataLondon", async (req, res) => {
  const response = await fetch(searchDataFetchUrlLondon);
  const responseJson = await response.json();
  res.json(responseJson);
});

const searchDataFetchUrlLiverpool =
  "https://api.npoint.io/4902442ea61709f8fa29";
app.get("/fetchSearchDataLiverpool", async (req, res) => {
  const response = await fetch(searchDataFetchUrlLiverpool);
  const responseJson = await response.json();
  res.json(responseJson);
});

const searchDataFetchUrlManchester =
  "https://api.npoint.io/e07856c632268831a2ad";
app.get("/fetchSearchDataManchester", async (req, res) => {
  const response = await fetch(searchDataFetchUrlManchester);
  const responseJson = await response.json();
  res.json(responseJson);
});
const searchDataFetchUrlEdinburgh =
  "https://api.npoint.io/fd3ba72c2764f83f8451";
app.get("/fetchSearchDataEdinburgh", async (req, res) => {
  const response = await fetch(searchDataFetchUrlEdinburgh);
  const responseJson = await response.json();
  res.json(responseJson);
});
const searchDataFetchUrlOxford = "https://api.npoint.io/154a43f99acb02885753";
app.get("/fetchSearchDataOxford", async (req, res) => {
  const response = await fetch(searchDataFetchUrlOxford);
  const responseJson = await response.json();
  res.json(responseJson);
});

exports.api = functions.https.onRequest(app);
