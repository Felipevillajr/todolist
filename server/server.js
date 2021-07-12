const express = require("express");
const app = express();
const PORT = process.env.port || 3000;
const cors = require("cors");

app.use("/static", express.static("public/IMGS"));
app.use(cors());
