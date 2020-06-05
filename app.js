const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { urlencoded } = require("express");

require("dotenv").config();
const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(cookieParser());
// app.use(
//   cors({
//     origin: "http://localhost:4000",
//     credentials: true,
//   })
// );
app.get("/login", (req, res, next) => {
  res.sendFile("login.html", { root: __dirname+"/public" });
});

app.get("/", (req, res, next) => {
    res.sendFile("index.html", { root: __dirname+"/public" });
  });
app.use(urlencoded({ extended: true }));

// app.get("/", async (req, res) => {
//   res.send("hello node");
// });
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
