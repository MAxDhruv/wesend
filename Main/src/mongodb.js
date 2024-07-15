// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/Wesend', {
  
// })
// .then(() => {
//   console.log('Mongoose Connected');
// })
// .catch((err) => {
//   console.error('Mongoose Not Connected:', err);
// });

// const WesendSchema = new mongoose.Schema({
//   fullName: {
//     type: String,
//     required: true,
//   },
//   username: {
//     type: String,
//     required: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   confirmPassword: {
//     type: String,
//     required: true,
//   },
// });



// // Define Schemas
// const SendWhatsappSchema = new mongoose.Schema({
//   mobileNumbers: {
//     type: String,
//     required: true,
//   },
//   groupImport: String,
//   csvImport: String,
//   txtImport: String,
//   count: String,
//   message: {
//     type: String,
//     maxLength: 1024,
//     required: true,
//   },
// });

// const SendInternationalSchema = new mongoose.Schema({
//   mobileNumbers: {
//     type: String,
//     required: true,
//   },
//   groupImport: String,
//   csvImport: String,
//   txtImport: String,
//   count: String,
//   message: {
//     type: String,
//     maxLength: 1024,
//     required: true,
//   },
// });

// const SendButtonSchema = new mongoose.Schema({
//   mobileNumbers: {
//     type: String,
//     required: true,
//   },
//   groupImport: String,
//   csvImport: String,
//   txtImport: String,
//   count: String,
//   message: {
//     type: String,
//     maxLength: 1024,
//     required: true,
//   },
//   image: String,
//   dp: String,
//   callNow: String,
//   visitNow: String,
// });


// // const Wesend = mongoose.model('Wesend', WesendSchema);
// const SendWhatsapp = mongoose.model('SendWhatsapp', SendWhatsappSchema);
// const SendInternational = mongoose.model('SendInternational', SendInternationalSchema);
// const SendButton = mongoose.model('SendButton', SendButtonSchema);
// const Wesend = mongoose.model('Wesend', WesendSchema);
// // module.exports = Wesend;
// module.exports = {
//   SendWhatsapp,
//   SendInternational,
//   SendButton,
//   Wesend,
// };



const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Wesend', {
  // useNewUrlParser: true,
  // useUnifiedTopology: true
})
.then(() => {
  console.log('Mongoose Connected');
})
.catch((err) => {
  console.error('Mongoose Not Connected:', err);
});

// const WesendSchema = new mongoose.Schema({
//   fullName: {
//     type: String,
//     required: true,
//   },
//   username: {
//     type: String,
//     required: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   confirmPassword: {
//     type: String,
//     required: true,
//   },
// });

const WesendSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true, // Ensure usernames are unique
  },
  password: {
    type: String,
    required: true,
  },
  confirmPassword: {
    type: String,
    required: true,
  },
  credits: {
    WN: {
      type: Number,
      default: 0,
    },
    WI: {
      type: Number,
      default: 0,
    },
    WB: {
      type: Number,
      default: 0,
    },
  },
});


const SendWhatsappSchema = new mongoose.Schema({
  mobileNumbers: {
    type: String,
    required: true,
  },
  groupImport: String,
  csvImport: {
    data: Buffer,
    contentType: String
  },
  txtImport: {
    data: Buffer,
    contentType: String
  },
  count: String,
  message: {
    type: String,
    maxLength: 1024,
    required: true,
  },
  image: {
    data: Buffer,
    contentType: String
  },
  pdf: {
    data: Buffer,
    contentType: String
  },
  dp: String,
  callNow: String,
  visitNow: String,
});

const SendInternationalSchema = new mongoose.Schema({
  mobileNumbers: {
    type: String,
    required: true,
  },
  groupImport: String,
  csvImport: {
    data: Buffer,
    contentType: String
  },
  txtImport: {
    data: Buffer,
    contentType: String
  },
  count: String,
  message: {
    type: String,
    maxLength: 1024,
    required: true,
  },
  image: {
    data: Buffer,
    contentType: String
  },
  pdf: {
    data: Buffer,
    contentType: String
  },
});

const SendButtonSchema = new mongoose.Schema({
  mobileNumbers: {
    type: String,
    required: true,
  },
  groupImport: String,
  csvImport: {
    data: Buffer,
    contentType: String
  },
  txtImport: {
    data: Buffer,
    contentType: String
  },
  count: String,
  message: {
    type: String,
    maxLength: 1024,
    required: true,
  },
  image: {
    data: Buffer,
    contentType: String
  },
  pdf: {
    data: Buffer,
    contentType: String
  },
  dp: String,
  callNow: String,
  visitNow: String,
});

const Wesend = mongoose.model('Wesend', WesendSchema);
const SendWhatsapp = mongoose.model('SendWhatsapp', SendWhatsappSchema);
const SendInternational = mongoose.model('SendInternational', SendInternationalSchema);
const SendButton = mongoose.model('SendButton', SendButtonSchema);

module.exports = {
  SendWhatsapp,
  SendInternational,
  SendButton,
  Wesend,
};
