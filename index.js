const express = require("express");
const uuidAPIKey = require("uuid-apikey");
const nunjucks = require("nunjucks");

const app = express();

const key = {
  apiKey: "Q5YQ0N2-V304M1A-HZAM3XD-T8Z5171",
  uuid: "b97d7054-d8c0-4a05-8fd5-41f5d23e509c",
};

nunjucks.configure("views", {
  express: app,
  watch: true,
});
app.set("view engine", "html");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/:apiKey", async (req, res) => {
  const { apiKey } = req.params;
  if (!uuidAPIKey.isAPIKey(apiKey) || !uuidAPIKey.check(apiKey, key.uuid)) {
    res.send("API key가 잘못됨.");
  } else {
    const data = [
      { name: "고예성", age: 28, year: 48 },
      { name: "황성태", age: 26, year: 50 },
      { name: "안성욱", age: 26, year: 50 },
      { name: "김민성", age: 21, year: 55 },
    ];
    res.send(data);
  }
});

app.listen(3001, () => {
  console.log("start server - localhost:3001");
});
