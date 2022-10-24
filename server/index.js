const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const dotenv = require("dotenv");
const connection = require("./config");
const indexRouter = require("./routes/index.js");

dotenv.config();

const app = express();

app.set("port", process.env.PORT || 5000);
connection();
app.use(morgan("dev"));
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["POST", "GET", "OPTIONS"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    name: "sid",
    secret: process.env.COOKIE_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: {
      domain: "localhost",
      path: "/",
      maxAge: 24 * 6 * 60 * 10000,
      sameSite: false,
      httpOnly: true,
      secure: false,
    },
  })
);

app.use("/", indexRouter);

app.listen(app.get("port"), () => {
  console.log("NFT MarketPlace App server listening on port", app.get("port"));
});
