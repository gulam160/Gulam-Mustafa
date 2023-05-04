const express = require("express");
const { CompanyModel } = require("../Model/companiesModel");

const companiesRouter = express.Router();
// Searching across the company name, primary text, headline, and description in a single query
companiesRouter.get("/companyAds", async (req, res) => {
  const { q } = req.query;
  try {
    if (q) {
      let pipeline = [
        { name: new RegExp(q, "i") },
        { primaryText: new RegExp(q, "i") },
        { headline: new RegExp(q, "i") },
        { description: new RegExp(q, "i") },
      ];
      let response = await CompanyModel.aggregate([
        { $match: { $or: pipeline } },
      ]);
      res.status(200).send(response);
    } else {
      res.status(401).send({ msg: "Request needs a query" });
    }
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

module.exports = { companiesRouter };
