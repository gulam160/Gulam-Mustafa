const express = require("express");
const cors = require("cors");
const { connection } = require("./Controller/connection");
const { companiesRouter } = require("./View/companies");

// My Server Port
require("dotenv").config();
const port = process.env.SERVER_PORT;

// My Server
const app = express();

// Middlewares and Customs
app.use(express.json());
app.use(cors());
app.use("/company", companiesRouter);

// End Points
app.get("/", (req, res) => {
  res.status(200).send({ message: "default Route" });
});

app.listen(port, async () => {
  try {
    await connection;
    console.log("Connected to Mongo Atlas");
  } catch (error) {
    console.error(error.message);
  }
  console.log(`Server is running at ${port}`);
});
