
// function of db connect 

const mongoose = require('mongoose');

const URI = "mongodb+srv://RiadhKtr:AaHSlYN3lo8256sr@cluster1.hbozg.mongodb.net/checkpoint";

const connectDatabase = async()=>{
    await mongoose.connect(URI)
    .then(()=>{
      console.log('database connected with sucess');
    })
    .catch((err)=>{
    console.log(err);
    })
}

module.exports = connectDatabase