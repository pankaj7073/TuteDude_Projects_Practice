const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/todoData").then(()=>{
    console.log("Connection Successfull: ")
}).catch((err)=>{
    console.log("No Connection", err);
})