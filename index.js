const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("database is connected");
  })
  .catch((err) => {
    console.log(err);
  });
//Schema== shape of a document
// database,collection ,documents

//Create a Schema
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  isMarried: Boolean,
  salary: Number,
  gender: String,
});

// model

const User = mongoose.model("User", userSchema);
