const mongoose = require("mongoose");
const schema = mongoose.Schema;

const reportSchema = new schema({
  studentName: {
    type: String,
  },
  rollNo: {
    type: Number,
  },
  maths: {
    type: Number,
  },
  physics: {
    type: Number,
  },
  chemistry: {
    type: Number,
  },
  biology: {
    type: Number,
  },
  english: {
    type: Number,
  },
  hindi: {
    type: Number,
  },
});

const reportCard = mongoose.model("ReportCard", reportSchema);
module.exports = reportCard;
