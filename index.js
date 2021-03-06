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

/******Find documents*******/
async function fetchInformations() {
  //   const users = await User.find({ isMarried: false, salary: 80000 }); //find == return array ;; findOne == return document object
  //   const users = await User.findOne({ isMarried: false, salary: 80000 });
  const users = await User.findById("6027d1fd8d4a543a2049d1a0");
  console.log(users);
}
fetchInformations();

/******Store into database*******/
// async function storeInfo() {
//   // user object
//   const user = new User({
//     name: "Naima",
//     age: 32,
//     isMarried: true,
//     salary: 40000,
//     gender: "Female",
//   });

//   await user.save();

//   console.log(user);
// }
// storeInfo();
