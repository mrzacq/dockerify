const express = require("express");
const { PORT, HOST, NODE_ENV } = require("./config/env.js");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Docker is not easy" });
});

app.get("/user", (req, res) => {
  res.json({ email: "hartantoaanan@gmail.com", password: "iloveyou" });
});

app.get("/finally", (req, res) => {
  res.json({
    message:
      "it is work just simply add --legacy-watch or -L in npm script nodemon, tf maybe 8 hours wasted here",
  });
});

app.listen(PORT, () => {
  if (NODE_ENV === "development") {
    // eslint-disable-next-line no-console
    console.log(`app listening at ${HOST}:${PORT}`);
  }
});
