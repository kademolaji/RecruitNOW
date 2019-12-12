const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");

//Routes Files
const jobs = require("./routes/jobs");

//Load env variables
dotenv.config({ path: "./config/config.env" });

const app = express();

// Dev logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//Mount Routes
app.use("/api/v1/jobs", jobs);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
