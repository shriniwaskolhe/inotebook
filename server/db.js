const mongoose = require('mongoose');
const path = require('path');

// Path to your global-bundle.pem file
const caPath = path.resolve(__dirname, 'global-bundle.pem');

// AWS DocumentDB connection string
const mongoURI = `mongodb://shriniwas:shriniwas@docdb-2024-08-13-13-54-32.cluster-cvgay0a0u2gd.ap-south-1.docdb.amazonaws.com:27017/?tls=true&tlsCAFile=global-bundle.pem&replicaSet=rs0&readPreference=secondaryPreferred&retryWrites=false`;

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            tlsCAFile: caPath,
        });
        console.log("Connected to DocumentDB successfully");
    } catch (error) {
        console.error("Error connecting to DocumentDB:", error.message);
    }
};

module.exports = connectToMongo;
