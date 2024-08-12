const mongoose = require('mongoose');

const mongoURI = "mongodb://shriniwas:<shriniwas>@docdb-2024-08-12-13-49-00.cluster-cvgay0a0u2gd.ap-south-1.docdb.amazonaws.com:27017/?tls=true&tlsCAFile=global-bundle.pem&replicaSet=rs0&readPreference=secondaryPreferred&retryWrites=false"



const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;