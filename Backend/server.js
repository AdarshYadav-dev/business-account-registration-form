const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
require('dotenv').config();

// Connection + Model
require('./Models/db');
const Business = require('./Models/TaskMode');

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../Frontend'))); // serve HTML/CSS/JS

app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); 

// Multer setup
const storage = multer.diskStorage({
  destination: function(req,file,cb){
    return cb(null, "./uploads");
  },
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});
const upload = multer({ storage, limits: { fileSize: 5 * 1024 * 1024 } });

// Single route
app.post('/api/business', upload.fields([
  { name: 'businessRegistration', maxCount: 1 },
  { name: 'taxIdentification', maxCount: 1 },
  { name: 'authorizedRepId', maxCount: 1 },
  { name: 'proofOfAddress', maxCount: 1 }
]), async (req, res) => {
  try {
    const files = req.files;
    const data = { ...req.body };

    // attach filenames to data
    data.businessRegistration = files.businessRegistration?.[0]?.filename || null;
    data.taxIdentification = files.taxIdentification?.[0]?.filename  || null;
    data.authorizedRepId = files.authorizedRepId?.[0]?.filename || null;
    data.proofOfAddress  = files.proofOfAddress?.[0]?.filename || null;

    const business = new Business(data);
    await business.save();

    res.json({ success: true, message: 'Business account created!', id: business._id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

app.listen(`${PORT}`,function(){
    console.log("bro server to chal raha hai")
})