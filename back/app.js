const express = require("express");
const cors = require("cors");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const passport = require("passport");
const morgan = require("morgan");
const path = require("path");
const hpp = require("hpp");
const morgan = require("morgan");
const helmet = require("helmet");

const authRouter = require("./routes/auth");
const askRouter = require("./routes/asks");
const answerRouter = require("./routes/answers");

const db = require("./models");
const { urlencoded } = require("express");

dotenv.config();
const passportConfig = require("./passport");
const answer = require("./models/answer");
const morgan = require("morgan");
const app = express();

// 서버 배포 환경 설정
if (process.env.NODE_ENV === "production") {
  app.use(hpp());
  app.use(helmet());
} else {
  app.use(morgan("dev"));
}

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

// CORS ERROR solution

app.use(
  cors({
    origin: ["http://localhost:3000", "asker.com"],
    credentials: true, // true로 해주어야 쿠키가 프론트로 전달된다
  })
);

// Middleware
app.use(express.json());
app.use(urlencoded({ extended: true }));

app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    name: "Asker",
    saveUninitialized: false,
    cookie: { maxAge: 60000 * 60 * 24 },
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
