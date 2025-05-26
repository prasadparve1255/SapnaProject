// filepath: d:\Recact1 (2)\Recact1\backend\modles\AuthModel.js
const mongoose = require('mongoose')

const authSchema = new mongoose.Schema({
  uname: String,
  email: { type: String, unique: true }, // <-- unique email
  password: String
});

const Auth = mongoose.model("auth", authSchema)
module.exports = Auth