const express = require("express");
const md5 = require("md5");
const cors = require('cors');
const bodyParser = require("body-parser");

const multer=require("multer");

const helmet=require("helmet");

const morgan =require("morgan");

const fs=require("fs");
const path = require("path");

const app = express();

app.use(helmet()); 

app.use(cors({ origin: true, credentials: true })); // Enable CORS for all routes(all reuestes are accepted 3000,8000 ports creditonals for allownig cookies)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());


app.listen(5000, function () {
  console.log("server straed on port 5000");
});

//Morgan Middleware
const accessLogStream=fs.createWriteStream(path.join(__dirname,'/Logs/access.log'),{flags: 'a'});
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :date[web]', {stream: accessLogStream}));

//Cookie
const cookieparser = require("cookie-parser");
app.use((req, res, next) => {
  res.header("Cache-Control", "private, no-cache, no-store, must-revalidate");
  res.header("Expires", "-1");
  res.header("Pragma", "no-cache");
  next();
});
app.use(cookieparser());

//MongoDB Altas Connection
const mongoose = require("mongoose");

const dburl =
  "mongodb+srv://staion1504:aCYw1ZQ3wVZY7ku4@cluster0.xjrpfdo.mongodb.net/SAYS?retryWrites=true&w=majority";


mongoose
  .connect(dburl, {})
  .then(() => {
    console.log("Connected to mongodb");
  })
  .catch((err) => {
    console.log("Failed to connect to mongodb");
  });



//User Routes
// const landingpage = require("./routes/user/landingpage");
const loginpage = require("./routes/user/loginpage");
// const signout = require("./routes/user/signout");
const signup = require("./routes/user/signup");
const homeroutes = require("./routes/user/home_routes");
const movieroutes = require("./routes/user/movie_routes");
const userprofileroutes = require("./routes/user/profile_routes");
const snacksroutes = require("./routes/user/snacks_routes");
// const aboutusroutes = require("./routes/user/aboutus_routes");
const recentbookingroutes = require("./routes/user/recentbookings_routes");
// const movienewsroutes = require("./routes/user/movienews_routes");
const moviereviewroutes = require("./routes/user/moviereviews_routes");
const theatrereviewroutes = require("./routes/user/theatrereview_routes");
const contactusroutes = require("./routes/user/contactus_routes");
const usertheatreprofileroutes = require("./routes/user/usertheatre_routes");
// const moviegameroutes = require("./routes/user/moviegame_routes");

// app.use("/", landingpage);
app.use("/login", loginpage);
// app.use("/signout", signout);
app.use("/Signup", signup);
app.use("/home", homeroutes);
app.use("/movies", movieroutes);
app.use("/profile", userprofileroutes);
app.use("/snacks", snacksroutes);
// app.use("/aboutus", aboutusroutes);
app.use("/recentbooking", recentbookingroutes);
// app.use("/movienews", movienewsroutes);
app.use("/reviews", moviereviewroutes);
app.use("/treviews", theatrereviewroutes);
app.use("/contactus", contactusroutes);
app.use("/usertheatreprofile", usertheatreprofileroutes);
// app.use("/moviegame", moviegameroutes);


//Theatre Dashboard Routes

const Tdashboardroutes = require("./routes/Theatre/Tdashboard_routes");
const Tsignuproutes = require("./routes/Theatre/Tsignup_routes");
// const Tdashboardroutes = require("./routes/Theatre/Tdashboard_routes");
const Tprofileroutes = require("./routes/Theatre/Tprofile_routes");
const Tsnackspageroutes = require("./routes/Theatre/Tsnackspage_routes");
const Tmdashboardroutes = require("./routes/Theatre/Tmdashboard_routes");
const Tscheduleroutes = require("./routes/Theatre/Tschedule_routes");
const Tloginroutes = require("./routes/Theatre/Tlogin_routes");
// const Tsignoutroutes = require("./routes/Theatre/Tsignout");
const userTheatreinforoutes = require("./routes/Theatre/usertheatreinfo_routes");

app.use("/tdashboard", Tdashboardroutes);

app.use("/TSignup", Tsignuproutes);

app.use("/tprofile", Tprofileroutes);
app.use("/tsnackspage", Tsnackspageroutes);
app.use("/tmdashboard", Tmdashboardroutes);
app.use("/tschedule", Tscheduleroutes);
app.use("/Tlogin", Tloginroutes);
// app.use("/Tsignout", Tsignoutroutes);
app.use("/usertheatreinfo", userTheatreinforoutes);


//Admin Dashboard Routes
const adminhomeroutes = require("./routes/Admin/adminhome_routes");
const adminmoviesroutes = require("./routes/Admin/adminmovies_routes");
const adminclientroutes = require("./routes/Admin/adminclient_routes");
const admintheatreroutes = require("./routes/Admin/admintheatre_routes");
const adminmassmailroutes = require("./routes/Admin/adminmassmail_routes");

app.use("/adminhome", adminhomeroutes);
app.use("/Adminmovies", adminmoviesroutes);
app.use("/Adminclient", adminclientroutes);
app.use("/Admintheatre", admintheatreroutes);
app.use("/adminmassmail", adminmassmailroutes);


