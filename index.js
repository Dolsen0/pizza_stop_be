import express from "express";
import cors from "cors";
import menu from "./data/menu.json" assert { type: "json" };
import info from "./data/info.json" assert { type: "json" };

const app = express();

app.use(cors());  // This will allow all origins. Be more specific in a production environment.

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/menu", (req, res) => {
  res.json(menu);
});

app.get("/info", (req, res) => {
    res.json(info)
});

app.listen(3000, () => {
  console.log(`Server running on http://localhost:${3000}`);
});
