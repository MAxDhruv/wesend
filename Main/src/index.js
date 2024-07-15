// const express = require('express');
// const session = require('express-session');
// const MongoStore = require('connect-mongo');
// const cors = require('cors');
// const { Wesend, SendWhatsapp, SendInternational, SendButton } = require('../src/mongodb.js'); // Adjust the path as necessary

// const app = express();
// const port = 3001;

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// app.use(session({
//   secret: 'myVerySecretAndRandomString123!', 
//   resave: false,
//   saveUninitialized: false,
//   store: MongoStore.create({ 
//     mongoUrl: 'mongodb://localhost:27017/sessionstore', 
//     ttl: 60 * 60 * 24 
//   })
// }));

// const generateCaptcha = () => {
//   const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//   let result = '';
//   const charactersLength = characters.length;
//   for (let i = 0; i < 6; i++) {
//     result += characters.charAt(Math.floor(Math.random() * charactersLength));
//   }
//   return result;
// };

// app.use((req, res, next) => {
//   if (!req.session.captcha) {
//     req.session.captcha = generateCaptcha();
//   }
//   next();
// });

// // Login endpoint
// app.post('/login', async (req, res) => {
//   const { username, password } = req.body;

//   try {
//     const user = await Wesend.findOne({ username, password });

//     if (user) {
//       res.json({ success: true });
//     } else {
//       res.json({ success: false });
//     }
//   } catch (error) {
//     console.error('Error logging in:', error);
//     res.status(500).json({ error: 'Failed to log in. Please try again.' });
//   }
// });

// // Signin endpoint
// app.post('/signin', async (req, res) => {
//   const data = {
//     fullName: req.body.fullName,
//     username: req.body.userName,
//     password: req.body.password,
//     confirmPassword: req.body.confirmPassword,
//   };

//   try {
//     const createdUser = await Wesend.create(data);
//     console.log('Data successfully saved:', createdUser); // Log saved data
//     res.status(201).json(createdUser); // Send back a response
//   } catch (err) {
//     console.error('Error saving data:', err);
//     res.status(500).send('Error saving data');
//   }
// });

// // Feedback endpoint
// app.post('/feedback', async (req, res) => {
//   const { feedback } = req.body;

//   try {
//     const newFeedback = await Feedback.create({ feedback });
//     console.log('Feedback submitted:', newFeedback);
//     res.status(201).json(newFeedback);
//   } catch (err) {
//     console.error('Error submitting feedback:', err);
//     res.status(500).send('Error submitting feedback');
//   }
// });

// // Endpoint for Send WhatsApp form submission
// app.post('/whatsappApi', async (req, res) => {
//   try {
//     const { mobileNumbers, groupImport, csvImport, txtImport, count, message } = req.body;

//     // Validate required fields
//     if (!mobileNumbers || !message) {
//       return res.status(400).json({ error: 'mobileNumbers and message are required fields' });
//     }

//     const formData = new SendWhatsapp({
//       mobileNumbers,
//       groupImport,
//       csvImport,
//       txtImport,
//       count,
//       message,
//     });

//     const result = await formData.save();
//     console.log('Data saved for Send WhatsApp:', result);
//     res.status(201).json(result);
//   } catch (error) {
//     console.error('Error saving data for Send WhatsApp:', error);
//     res.status(500).send('Error saving data for Send WhatsApp');
//   }
// });

// // Endpoint for Send Button form submission
// app.post('/sendButtonApi', async (req, res) => {
//   try {
//     const { mobileNumbers, groupImport, csvImport, txtImport, count, message, image, dp, callNow, visitNow } = req.body;

//     // Validate required fields
//     if (!mobileNumbers || !message) {
//       return res.status(400).json({ error: 'mobileNumbers and message are required fields' });
//     }

//     const formData = new SendButton({
//       mobileNumbers,
//       groupImport,
//       csvImport,
//       txtImport,
//       count,
//       message,
//       image,
//       dp,
//       callNow,
//       visitNow,
//     });

//     const result = await formData.save();
//     console.log('Data saved for Send Button:', result);
//     res.status(201).json(result);
//   } catch (error) {
//     console.error('Error saving data for Send Button:', error);
//     res.status(500).send('Error saving data for Send Button');
//   }
// });

// // Endpoint for Send International form submission
// app.post('/internationalApi', async (req, res) => {
//   try {
//     const { mobileNumbers, groupImport, csvImport, txtImport, count, message } = req.body;

//     // Validate required fields
//     if (!mobileNumbers || !message) {
//       return res.status(400).json({ error: 'mobileNumbers and message are required fields' });
//     }

//     const formData = new SendInternational({
//       mobileNumbers,
//       groupImport,
//       csvImport,
//       txtImport,
//       count,
//       message,
//     });

//     const result = await formData.save();
//     console.log('Data saved for Send International:', result);
//     res.status(201).json(result);
//   } catch (error) {
//     console.error('Error saving data for Send International:', error);
//     res.status(500).send('Error saving data for Send International');
//   }
// });

// // Endpoint for Send Button form submission
// app.post('/sendButtonApi', async (req, res) => {
//   try {
//     const formData = {
//       mobileNumbers: req.body.mobileNumbers,
//       groupImport: req.body.groupImport,
//       csvImport: req.body.csvImport,
//       txtImport: req.body.txtImport,
//       count: req.body.count,
//       message: req.body.message,
//       image: req.body.image,
//       dp: req.body.dp,
//       callNow: req.body.callNow,
//       visitNow: req.body.visitNow,
//     };

//     const result = await SendButton.create(formData);
//     console.log('Data saved for Send Button:', result);
//     res.status(201).json(result);
//   } catch (error) {
//     console.error('Error saving data for Send Button:', error);
//     res.status(500).send('Error saving data for Send Button');
//   }
// });

// // Start server
// app.listen(port, () => {
//   console.log(`Server listening at http://localhost:${port}`);
// });



const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const cors = require('cors');
const mongoose = require('mongoose');
const multer = require('multer');
const { Wesend, SendWhatsapp, SendInternational, SendButton } = require('../src/mongodb.js'); // Adjust the path as necessary

const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(session({
  secret: 'myVerySecretAndRandomString123!', 
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ 
    mongoUrl: 'mongodb://localhost:27017/sessionstore', 
    ttl: 60 * 60 * 24 
  })
}));

const generateCaptcha = () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  const charactersLength = characters.length;
  for (let i = 0; i < 6; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

app.use((req, res, next) => {
  if (!req.session.captcha) {
    req.session.captcha = generateCaptcha();
  }
  next();
});

// Configure multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Login endpoint
// app.post('/login', async (req, res) => {
//   const { username, password } = req.body;

//   try {
//     const user = await Wesend.findOne({ username, password });

//     if (user) {
//       res.json({ success: true });
//     } else {
//       res.json({ success: false });
//     }
//   } catch (error) {
//     console.error('Error logging in:', error);
//     res.status(500).json({ error: 'Failed to log in. Please try again.' });
//   }
// });                                                

app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await Wesend.findOne({ username, password });

    if (user) {
      res.json({ success: true, credits: user.credits });
    } else {
      res.json({ success: false });
    }
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ error: 'Failed to log in. Please try again.' });
  }
});


app.post('/deductCredits', async (req, res) => {
  const { username, creditType, amount } = req.body;

  try {
    const user = await Wesend.findOne({ username });

    if (!user) {
      return res.status(404).json({ error: 'User not found.' });
    }

    // Deduct credits based on creditType (WN, WI, WB)
    if (user.credits[creditType] >= amount) {
      user.credits[creditType] -= amount;
      await user.save();
      res.json({ success: true, credits: user.credits });
    } else {
      res.status(400).json({ error: 'Insufficient credits.' });
    }
  } catch (error) {
    console.error('Error deducting credits:', error);
    res.status(500).json({ error: 'Failed to deduct credits.' });
  }
});






// Signin endpoint
app.post('/signin', async (req, res) => {
  const data = {
    fullName: req.body.fullName,
    username: req.body.userName,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
  };

  try {
    const createdUser = await Wesend.create(data);
    console.log('Data successfully saved:', createdUser); // Log saved data
    res.status(201).json(createdUser); // Send back a response
  } catch (err) {
    console.error('Error saving data:', err);
    res.status(500).send('Error saving data');
  }
});

// Feedback endpoint
app.post('/feedback', async (req, res) => {
  const { feedback } = req.body;

  try {
    const newFeedback = await Feedback.create({ feedback });
    console.log('Feedback submitted:', newFeedback);
    res.status(201).json(newFeedback);
  } catch (err) {
    console.error('Error submitting feedback:', err);
    res.status(500).send('Error submitting feedback');
  }
});

// Endpoint for Send WhatsApp form submission
app.post('/whatsappApi', upload.fields([{ name: 'csvImport' }, { name: 'txtImport' }, { name: 'image' }, { name: 'pdf' }]), async (req, res) => {
  try {
    const { mobileNumbers, groupImport, count, message } = req.body;

    // Validate required fields
    if (!mobileNumbers || !message) {
      return res.status(400).json({ error: 'mobileNumbers and message are required fields' });
    }

    const formData = new SendWhatsapp({
      mobileNumbers,
      groupImport,
      csvImport: req.files['csvImport'] ? {
        data: req.files['csvImport'][0].buffer,
        contentType: req.files['csvImport'][0].mimetype
      } : undefined,
      txtImport: req.files['txtImport'] ? {
        data: req.files['txtImport'][0].buffer,
        contentType: req.files['txtImport'][0].mimetype
      } : undefined,
      image: req.files['image'] ? {
        data: req.files['image'][0].buffer,
        contentType: req.files['image'][0].mimetype
      } : undefined,
      pdf: req.files['pdf'] ? {
        data: req.files['pdf'][0].buffer,
        contentType: req.files['pdf'][0].mimetype
      } : undefined,
      count,
      message,
    });

    const result = await formData.save();
    console.log('Data saved for Send WhatsApp:', result);
    res.status(201).json(result);
  } catch (error) {
    console.error('Error saving data for Send WhatsApp:', error);
    res.status(500).send('Error saving data for Send WhatsApp');
  }
});

// Endpoint for Send Button form submission
app.post('/sendButtonApi', upload.fields([{ name: 'csvImport' }, { name: 'txtImport' }, { name: 'image' }, { name: 'pdf' }]), async (req, res) => {
  try {
    const { mobileNumbers, groupImport, count, message, dp, callNow, visitNow } = req.body;

    // Validate required fields
    if (!mobileNumbers || !message) {
      return res.status(400).json({ error: 'mobileNumbers and message are required fields' });
    }

    const formData = new SendButton({
      mobileNumbers,
      groupImport,
      csvImport: req.files['csvImport'] ? {
        data: req.files['csvImport'][0].buffer,
        contentType: req.files['csvImport'][0].mimetype
      } : undefined,
      txtImport: req.files['txtImport'] ? {
        data: req.files['txtImport'][0].buffer,
        contentType: req.files['txtImport'][0].mimetype
      } : undefined,
      image: req.files['image'] ? {
        data: req.files['image'][0].buffer,
        contentType: req.files['image'][0].mimetype
      } : undefined,
      pdf: req.files['pdf'] ? {
        data: req.files['pdf'][0].buffer,
        contentType: req.files['pdf'][0].mimetype
      } : undefined,
      count,
      message,
      dp,
      callNow,
      visitNow,
    });

    const result = await formData.save();
    console.log('Data saved for Send Button:', result);
    res.status(201).json(result);
  } catch (error) {
    console.error('Error saving data for Send Button:', error);
    res.status(500).send('Error saving data for Send Button');
  }
});

// Endpoint for Send International form submission
app.post('/internationalApi', upload.fields([{ name: 'csvImport' }, { name: 'txtImport' }, { name: 'image' }, { name: 'pdf' }]), async (req, res) => {
  try {
    const { mobileNumbers, groupImport, count, message } = req.body;

    // Validate required fields
    if (!mobileNumbers || !message) {
      return res.status(400).json({ error: 'mobileNumbers and message are required fields' });
    }

    const formData = new SendInternational({
      mobileNumbers,
      groupImport,
      csvImport: req.files['csvImport'] ? {
        data: req.files['csvImport'][0].buffer,
        contentType: req.files['csvImport'][0].mimetype
      } : undefined,
      txtImport: req.files['txtImport'] ? {
        data: req.files['txtImport'][0].buffer,
        contentType: req.files['txtImport'][0].mimetype
      } : undefined,
      image: req.files['image'] ? {
        data: req.files['image'][0].buffer,
        contentType: req.files['image'][0].mimetype
      } : undefined,
      pdf: req.files['pdf'] ? {
        data: req.files['pdf'][0].buffer,
        contentType: req.files['pdf'][0].mimetype
      } : undefined,
      count,
      message,
    });

    const result = await formData.save();
    console.log('Data saved for Send International:', result);
    res.status(201).json(result);
  } catch (error) {
    console.error('Error saving data for Send International:', error);
    res.status(500).send('Error saving data for Send International');
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
