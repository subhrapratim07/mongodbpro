const mongoose = require('mongoose');

// Replace <YOUR_ATLAS_URI> with your MongoDB Atlas connection string
const atlasUri = 'mongodb+srv://msubhra364:Subhra@cluster0.0oq0nx4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// Connect to MongoDB Atlas
mongoose.connect(atlasUri, { useNewUrlParser: true, useUnifiedTopology: true });

// Get the default connection
const db = mongoose.connection;

// Check connection status
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', async () => {
  console.log('Connected to MongoDB Atlas');

  // Specify the database name
  const dbName = 'car';

  // Specify the collection name    
  const collectionName = 'pro';

  // Use the default connection's db object to get a reference to the collection
  const areaCollection = db.collection(collectionName);

  try {
    // Run a simple find query
    const result = await areaCollection.find().toArray();

    // Output the result
    console.log('Query result:', result);
  } catch (error) {
    console.error('Error during query:', error);
  } finally {
    // Close the connection after the query
    db.close();
  }
});
