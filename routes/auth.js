const express = require('express');
const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const router = express.Router();
const uri = 'mongodb+srv://aswathlrn2004:qH1pD4qHBXwBwEef@cluster0.1tyzw7x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; // Direct MongoDB connection string
const client = new MongoClient(uri);

router.post('/testregister', async (req, res) => {
    const { username, password } = req.body;
    try {
        await client.connect();
        const userDatabase = client.db(`user_${username}`);
        const userCollection = userDatabase.collection('user_data');

        const hashedPassword = await bcrypt.hash(password, 10);
        await userCollection.deleteMany({}); // delete any old data
        await userCollection.insertOne({ username, password: hashedPassword });

        res.json({ success: true, message: 'Test user registered with hashed password' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error during test registration' });
    } finally {
        await client.close();
    }
});


module.exports = router;