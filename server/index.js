let express = require("express"),
  path = require("path"),
  cors = require("cors"),
  logger = require("morgan"),
  cookieParser = require("cookie-parser"),
  bodyParser = require("body-parser"),
  morgan = require("morgan"),
  mongoose = require("mongoose"),
  passport = require("passport"),
  connection = require("./db");

require("./config/passport")(passport);
mongoose.set("useFindAndModify", false);
let app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(cors());

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(morgan("dev"));
app.use(passport.initialize());

/**
 * Server Routes
 */

app.get(
  "/",
  //passport.authenticate("jwt", { session: false }),
  function (req, res) {
    res.send("Page under construction.");
  }
);

app.get(
  "/api/",
  //passport.authenticate("jwt", { session: false }),
  function (req, res) {
    res.send("API under construction.");
  }
);

// Calling routes
let authentication = require("./routes/auth");
// let task = require("./routes/task")
// let 
// Using routes
app.use("/api", authentication);
// app.use("/api", task)
/**
 * End Server Routes
 */

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  let err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;

(async () => {
  await connection();
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });
})();

module.exports = app;
