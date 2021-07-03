const express = require("express");
const { PORT, HOST, NODE_ENV } = require("./config/env.js");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Docker is veasdfadsfadsfdfy easy" });
});

app.get("/user", (req, res) => {
  res.json({ email: "hartantoaanan@gmail.com", password: "password" });
});

app.listen(PORT, () => {
  if (NODE_ENV === "development") {
    // eslint-disable-next-line no-console
    console.log(`app listening at ${HOST}:${PORT}`);
  }
});
