const mongoose = require('mongoose');
const connectDB = async () => {
  mongoose
    .connect(
      'MongoDB url',
      { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
    )
    .then(() => {
      console.log('db connected');
    })
    .catch((err) => {
      console.log('failed to connect db', err);
    });
};

const UserSchema = mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  idnumber: { type: Number, required: true, unique: true },
  age: { type: Number, required: true },
  phonenumber: { type: Number, required: true },
  occupation: { type: String, required: true },
  gender: { type: String, required: true },
  signin: { type: Date, default: Date.now },
  creditcard: { type: Number, required: true, unique: true },
  curType: { type: String, require: true },
  total: { type: Number, default: 0 },
  lastwitdraw: { type: Number, default: 0 },
  lastdeposite: { type: Number, default: 0 },
});

const UserModel = mongoose.model('Users', UserSchema);

module.exports.connectDB = connectDB;
module.exports.UserModel = UserModel;
