const mongoose = require("mongoose");

const companySchema = mongoose.Schema(
  {
    companyId: Number,
    primaryText: String,
    headline: String,
    description: String,
    CTA: String,
    imageUrl: String,
    name: String,
    url: String,
  },
  {
    versionKey: false,
  }
);

const CompanyModel = mongoose.model("companie", companySchema);

module.exports = { CompanyModel };
