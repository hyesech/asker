const express = require("express");
const cors = require("cors");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const passport = require("passport");
const path = require("path");
const hpp = require("hpp");
const helmet = require("helmet");
const morgan = require("morgan");

const authRouter = require("./routes/auth");
const askRouter = require("./routes/asks");
const answerRouter = require("./routes/answers");

const db = require("./models");
const passportConfig = require("./passport");
const { urlencoded } = require("express");

dotenv.config();
const app = express();

// DB 연결
// alter: true
db.sequelize
  .sync()
  .then(() => {
    console.log("DB SUCCESS");
  })
  .catch(console.error);

// Passport Config
passportConfig();

// 서버 배포 환경 설정
if (process.env.NODE_ENV === "production") {
  // CORS ERROR solution
  app.use(
    cors({
      origin: "https://asker.dev",
      credentials: true, // true로 해주어야 쿠키가 프론트로 전달된다
    })
  );
  app.use(morgan("combined"));
  app.use(hpp());
  app.use(helmet());
} else {
  // CORS ERROR solution
  app.use(
    cors({
      origin: "http://localhost:3060",
      credentials: true, // true로 해주어야 쿠키가 프론트로 전달된다
    })
  );

  app.use(morgan("dev"));
}

// Middleware
app.use(express.json());
app.use(urlencoded({ extended: true }));

app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    name: "Asker",
    saveUninitialized: false,
    cookie: {
      maxAge: 60000 * 60 * 24,
      httpOnly: true,
      secure: false,
      domain: process.env.NODE_ENV === "production" && ".asker.dev",
    },
    resave: false,
    secret: process.env.COOKIE_SECRET,
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Router
app.use("/auth", authRouter);
app.use("/asks", askRouter);
app.use("/answers", answerRouter);

// 에러처리 미들웨어
// app.use((err, req, res, next) => {});

app.listen(80, () => {
  console.log("Listening on PORT 80...");
});
