const cors = require("cors");
const bodyParser = require("body-parser");
const cookies = require("cookies");
const express = require("express");
const cookieParser = require("cookie-parser");
const methodOverride = require("method-override");
const flash = require("connect-flash");
const session = require("express-session");
const path = require("path");

const app = express();

app.set("views", path.join(__dirname, "public/views"));
app.set("view engine", "pug");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(methodOverride("_method"));

app.use(cookies.express("a", "b", "c"));
app.use(cookieParser());

app.use(express.urlencoded({ extended: false }));
app.use(express.static(`${__dirname}/public/assets`));
app.locals.basedir = `${__dirname}/public/assets`;

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  }),
);

app.use(flash());
app.use((req, res, next) => {
  res.locals.messages = req.flash();
  next();
});
app.use(cors());
app.use(express.json());

app.use("/", require("./routes/index"));

app.all("*", (req, res) => res.render("errors/404"));

app.listen("3002", () => {
  console.log(`The server website is listening.`);
});
