const qs = require('qs');
const express = require("express");
const sls = require("serverless-http");
const app = express();



app.get("/.netlify/functions/callSpotifyApi", (req, res) => {
  //console.log(req.query.redirect_uri);
  const params = qs.stringify({
    response_type: "token",
    redirect_uri: req.query.redirect_uri,
    client_id: process.env.SPOTIFY_CLIENT_ID
  });
  res.redirect(`https://accounts.spotify.com/authorize?${params}`);
});

module.exports.handler = sls(app);
