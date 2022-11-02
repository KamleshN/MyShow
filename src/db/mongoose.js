const mongoose = require('mongoose')
const dotenv = require('dotenv').config();
console.log(process.env.MONGO_URL);
mongoose.set('useNewUrlParser', true); 
mongoose.set('useFindAndModify', false); 
mongoose.set('useCreateIndex', true); 
mongoose.set('useUnifiedTopology', true); 

mongoose.connect(process.env.MONGODB_URL)
