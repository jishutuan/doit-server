import express from "express";

const app = express();
app.get("/", (req, res) => {
  res.send({ msg: "hello,world" });
});

app.listen(3000);
