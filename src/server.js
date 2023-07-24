import express from "express";

const app = express();

app.use("/home" , (_, res) => {
    res.json({ message: "Home Page" });
  });

app.use("/", (_, res) => {
  res.json({ message: "server works!" });
});

app.listen(3000);
