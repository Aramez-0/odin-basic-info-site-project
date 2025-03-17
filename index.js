const express = require("express");
const app = express();
const path = require("path");

app.get("/", (req, res) => {
  const filePath = path.join(__dirname, "./index.html");
  res.sendFile(filePath);
});

app.get("/about", (req, res) => {
  const filePath = path.join(__dirname, "./about.html");
  res.sendFile(filePath);
});

app.get("/contact-me", (req, res) => {
  const filePath = path.join(__dirname, "./contact-me.html");
  res.sendFile(filePath);
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "./404.html"));
});

app.listen(3000);
