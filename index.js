const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://msubhra364:Subhra@cluster0.0oq0nx4.mongodb.net/'; // Replace with your MongoDB connection string

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToMongoDB() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    // Your code for interacting with MongoDB goes here
  } finally {
    // Close the connection when your application is done
    await client.close();
  }
}

connectToMongoDB();
