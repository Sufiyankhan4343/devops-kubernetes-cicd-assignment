const express = require("express");
const { Client } = require("pg");

const app = express();

const client = new Client({
  host: process.env.DB_HOST || "postgres",
  user: "postgres",
  password: "postgres",
  database: "postgres",
  port: 5432,
});

client.connect()
  .then(() => console.log("Connected to PostgreSQL"))
  .catch(err => console.error("DB Connection Error", err));

app.get("/", (req, res) => {
  res.send("DevOps Assignment Running");
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
