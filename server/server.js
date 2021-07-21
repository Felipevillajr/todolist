const express = require("express");
const app = express();
const PORT = process.env.port || 3000;
const cors = require("cors");
const fs = require("fs");
const tl = require("./DATA/todolist.json");

app.use("/static", express.static("public/IMGS"));
app.use(cors());

app.use(express.json());

app.get("/todolist", (req, res) => {
  res.send(tl);
});

app.get("/todolist/:id", (req, res) => {
  const obj = req.params;

  for (let props in obj) {
    let idFinder = obj[props];
    let foundId = tl.find((x) => x.id === idFinder);
    return res.send(foundId);
  }
});

app.post("/todolist", (req, res) => {
  const post = {
    id: Math.floor(Math.random() * 100000000000000000 + 1).toString(),
    item: req.body.data.item,
  };
  res.send(res.body.item);
  fs.readFile("./DATA/todolist.json", (err, data) => {
    if (err) {
      console.log(err.data);
    } else {
      const parseMe = JSON.parse(data);
      parseMe.push(post);
      const db = JSON.stringify(parseMe);
      fs.writeFile("./DATA/todolist.json", db, (err) => {
        if (err) {
          console.log(`error in writing file ${err}`);
        } else {
          console.log("writing successful");
          res.send(req.body.item);
        }
      });
    }
  });
});

app.listen(PORT, () => {});
