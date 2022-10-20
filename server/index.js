const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connection = require("./config");
const indexRouter = require("./routes/index.js");
dotenv.config();

const app = express();
app.set("port", process.env.PORT || 5000);
app.use(morgan("dev"));

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", indexRouter);

connection();

app.listen(app.get("port"), () => {
  console.log("NFT MarketPlace App server listening on port", app.get("port"));
});
