const mongoose = require("mongoose");
const connectDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://yaduk946:genericpwd.@cluster0.bygqnjf.mongodb.net/ProgressReport?retryWrites=true&w=majority",
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }
    );
  } catch (error) {
    console.error(error);
  }
};
module.exports = connectDb;
