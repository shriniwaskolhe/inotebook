const mongoose = require('mongoose');
const path = require('path');

// Path to your global-bundle.pem file
const caPath = path.resolve(__dirname, 'global-bundle.pem');

// AWS DocumentDB connection string
const mongoURI = `mongodb://localhost:27017`;

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
