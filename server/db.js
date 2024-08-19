const mongoose = require('mongoose');

const mongoURI = "mongodb://mongo_db:27017/inotebook"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;