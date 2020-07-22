const express = require('express');
const path = require('path');
const app = express();
const db = require('../database');
const connectDB = db.connectDB;
const UserModel = db.UserModel;
const sendEmail = require('../Email');
const axios = require('axios');
const { response } = require('express');

app.use(express.json({ extended: false }));

connectDB();
////////////// starting watermelon ////////////////

// For the first step of signing up, it sends and email with the credit card number.
app.post('/createUser', async (req, res) => {
  var creditcard = Math.floor(Math.random() * 999999999 + 1000000000);
  let {
    firstname,
    lastname,
    email,
    password,
    idnumber,
    age,
    phonenumber,
    occupation,
    gender,
    curType,
  } = req.body;

  let userDoc = new UserModel({
    firstname,
    lastname,
    email,
    password,
    idnumber,
    age,
    phonenumber,
    occupation,
    gender,
    creditcard,
    curType,
  });

  await userDoc
    .save()
    .then((response) => {
      sendEmail(response.email, creditcard);
      res.send(response);
    })
    .catch((err) => {
      var k = Object.keys(err.keyValue);
      res.status(500).send('You have a problem in ' + k[0]);
    });
});

// The second step of siging up after recieving the credit card number.
app.post('/verifyCD', async (req, res) => {
  let { creditcard, total } = req.body;
  await UserModel.find({ creditcard })
    .then(async (response) => {
      if (response.length == 0) {
        res.status(500).send('The creditcart is not exist');
        return;
      }
      await UserModel.where({ creditcard })
        .update({ $set: { total } })
        .then((resp) => {
          res.send(resp);
        })
        .catch((err) => {
          res.send(err);
        });
    })
    .catch((err) => {
      res.send('Server Error');
    });
});

// //////////////////////////////////////////////////////////////////////////////

//  This is for signing-in part
app.post('/signin', async (req, res) => {
  var { email, password } = req.body;
  await UserModel.find({ email, password })
    .then((response) => {
      if (response.length == 0) {
        res.status(500).send('The email or password is not correct');
        return;
      }
      res.send(response);
    })
    .catch((err) => {
      res.status(500).send('Server Error');
    });
});

///////////////////////////////////////////////////////////////////

// /// used for displaying user's finantial info
// app.get('/profile/:creditcard', (req, res) => {
//   var { creditcard } = req.params;
//   account
//     .findOne({ creditcard })
//     .then((result) => {
//       if (result !== null) {
//         res.send(result);
//       } else {
//         res.send({ message: 'Invalid Credit Card!' });
//       }
//     })
//     .catch((err) => {
//       res.send(err);
//       console.log('error in finding for display======>', err);
//     });
// });

//////////////////////////////////////////////////////////////////
// For displaying currency prices

app.get('/getAllCur', async (req, res) => {
  await axios
    .get(
      'http://api.currencylayer.com/live?access_key=8b428808e220c71b4622a3c5b1f7f672'
    )
    .then((result) => {
      res.send(result.data.quotes);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

////////////////////////////////////////////////////////////////////

// For convert the currency to another
app.post('/convert', async (req, res) => {
  const { from, to, amount } = req.body;
  const k = `${from}_${to}`;
  await axios
    .get(
      `https://free.currconv.com/api/v7/convert?apiKey=c6ee00f537d447b6a182&q=${from}_${to}&compact=y`
    )
    .then((response) => {
      var oneAmount = response.data[k].val;
      var total = amount * oneAmount;
      res.status(200).send('' + total);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

///////////////////////////////////////////////////////////////////

// this is for the deposite part, it looks for the credit card number provided and updates user's info accordingly.

app.put('/deposit', async (req, res) => {
  var { creditcard, amount } = req.body;
  await UserModel.where({ creditcard })
    .update({ $inc: { total: amount }, $set: { lastdeposite: amount } })
    .exec()
    .then((response) => {
      res.send(`${amount} was added to your account`);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

////////////////////////////////////////////////////////////////

// This is for the withdraw part, it looks for the credit card number provided and updates user's info accordingly.

// app.put('/withdraw', async (req, res) => {
//   var { creditcard, amount } = req.body;

//   await UserModel.find({ creditcard })
//     .then(async (response) => {
//       if (response.length == 0) {
//         res.status(500).send('There is no user with this creditcart');
//         return;
//       }
//       if (response.total - amount < 0) {
//         res.status(500).send(`Insufficiant Balance! Cannot withdraw ${amount}`);
//       }
//       await UserModel.where({ creditcard })
//         .update({ $inc: { total: amount }, $set: { lastdeposite: amount } })
//         .exec()
//         .then((response) => {
//           res.send(`${amount} was removed to your account`);
//         })
//         .catch((err) => {
//           res.status(500).send(err);
//         });
//     })
//     .catch((err) => {
//       res.status(500).send(err);
//     });
// });

// /////////////////////////////////////////////////////////////////////

// //// this promise hell is for transferring  money from one account to another
// app.get('/transfer', (req, res) => {
//   let { creditcard, id, amount } = req.query;
//   amount = Number(amount);
//   let reciever;
//   let sender;
//   let recieverAcc;
//   account
//     .findOne({ creditcard })
//     .then((result) => {
//       if (result !== null) {
//         sender = result.total;
//         signUp
//           .findOne({ idnumber: id })
//           .then((result) => {
//             if (result !== null) {
//               let credit = result.creditcard;
//               account
//                 .findOne({ creditcard: credit })
//                 .then((result) => {
//                   if (result !== null) {
//                     recieverAcc = result;
//                     reciever = result.total;
//                     if (sender - amount > 0) {
//                       sender = sender - amount;
//                       reciever = reciever + amount;
//                       account
//                         .updateOne({ creditcard }, { $set: { total: sender } })
//                         .then((result) => {
//                           let creditNum = recieverAcc.creditcard;
//                           account
//                             .updateOne(
//                               { creditcard: creditNum },
//                               { $set: { total: reciever } }
//                             )
//                             .then((result) => {
//                               res.send(`Successfully transfered ${amount}`);
//                             })
//                             .catch((err) => {
//                               console.log(err, 'Reciever update');
//                             });
//                         })
//                         .catch((err) => {
//                           console.log(err, 'Sender update');
//                         });
//                     } else {
//                       res.send('insufficient balance!');
//                     }
//                   } else {
//                     res.send("Cannot find reciever's credit card");
//                   }
//                 })
//                 .catch((err) => {
//                   console.log(err, 'Failed to find reciever!');
//                 });
//             } else {
//               res.send("Reciever ID doesn't exist");
//             }
//           })
//           .catch((err) => {
//             console.log(err, 'Failed to find reciever ID!');
//           });
//       } else {
//         res.send('Invalid credit card!');
//       }
//     })
//     .catch((err) => {
//       console.log(err, 'Failed to reach sender credit card!');
//     });
// });

// //////////////////////////////////////////////////////////////////////////

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
  });
}

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
