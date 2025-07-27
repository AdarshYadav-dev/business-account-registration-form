const mongoose = require('mongoose');
const DB_URL = process.env.DB_URL;

mongoose.connect(DB_URL)
.then(() =>{
console.log("MongoDB is also Connected...")
}).catch((err) =>{
console.log("MongoDB Can Error" , err.message)
})