const mongoose = require('mongoose');
const connectDB = async () => {
  mongoose
    .connect(
      'mongodb+srv://Falcons:Falcons@greenfield.64vuq.mongodb.net/banktesting?retryWrites=true&w=majority',
      { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
    )
    .then(() => {
      console.log('db connected');
    })
    .catch((err) => {
      console.log('failed to connect db', err);
    });
};

const signupSchema = mongoose.Schema({
  creditcard: { type: Number, required: true, unique: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  idnumber: { type: Number, required: true, unique: true },
  age: { type: String, required: true },
  occupation: { type: String, required: true },
  phonenumber: { type: Number, required: true },
  gender: { type: String, required: true },
  signin: [Date],
  date: { type: Date, default: Date.now },
});

const accountSchema = new mongoose.Schema({
  creditcard: { type: Number, required: true, unique: true },
  total: { type: Number, required: true },
  lastwitdraw: { type: Number, required: true, default: 0 },
  lastdeposite: { type: Number, required: true, default: 0 },
});
const signUp = mongoose.model('singUp', signupSchema);
const account = mongoose.model('account', accountSchema);

module.exports.connectDB = connectDB;
module.exports.signUp = signUp;
module.exports.account = account;
