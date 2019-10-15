const qs = require('qs');
const express = require("express");
const sls = require("serverless-http");

const app = express();
const params = qs.stringify({
  response_type: "token",
  redirect_uri: "http://localhost:8888/",
  client_id: process.env.SPOTIFY_CLIENT_ID
});

app.get("/", async (req, res, next) => {
  console.log(res.params)
  res.redirect(`https://accounts.spotify.com/authorize?${params}`);
});

module.exports.handler = sls(app);
