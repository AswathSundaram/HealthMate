// db.js
const mongoose = require('mongoose');

// Replace <password> with your MongoDB Atlas password
const uri = "mongodb+srv://aswathlrn2004:qH1pD4qHBXwBwEef@cluster0.1tyzw7x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = async () => {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connected successfully!");
    } catch (error) {
        console.error("MongoDB connection failed:", error.message);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;
