const express = require('express');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = process.env.PORT || 5000;
require('dotenv').config()
const app = express();
const cors = require('cors');

// Middile Ware
app.use(cors())
app.use(express.json())


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.jvqibpv.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    const usersCollection = client.db('Collages').collection('users');
    const collageCollection = client.db('Collages').collection('collages');
    const admissionsCollection = client.db('Collages').collection('admissions');
    const reviewsCollection = client.db('Collages').collection('reviews');


    // Client Feedback api 
    app.get('/reviews',async(req,res)=>{
      const result = await reviewsCollection.find().toArray();
      res.send(result);
    })

    // Admissions COllections api 
    app.post('/admissions', async (req,res)=>{
      const application = req.body;
      const result = await admissionsCollection.insertOne(application);
      res.send(result);
    })

    app.get('/applications',async(req,res)=>{
      const email = req.query.email;
      console.log(email);
      const query = {email: email};
      const result = await admissionsCollection.find(query).toArray();
      // console.log(result);
      res.send(result)
    })

    // Collage Api
    app.get('/all-collages', async(req,res)=>{
      const result = await collageCollection.find().toArray()
      res.send(result)
    })

    // Collage Details 
    app.get('/details/:id',async (req,res)=>{
      const id = req.params.id
      const query = {_id: new ObjectId(id)}
      // console.log(query);
      const result = await collageCollection.findOne(query);
      res.send(result)
    })


    // User Post On Database.
    app.post('/users', async (req, res) => {
      const user = req.body;
      const query = { email: user.email };
      const exitingUser = await usersCollection.findOne(query);
      if (exitingUser) {
        // console.log(exitingUser);
        return res.send({ Message: 'User Already exiting on Database' })
      }
      const result = await usersCollection.insertOne(user);
      // console.log(result);
      res.send(result)
    })

    // New endpoint for handling PUT request to update user profile
    app.put('/user/:id', async (req, res) => {
      const id = req.params.id;
      const updatedUser = req.body;
      delete updatedUser._id;

      const result = await usersCollection.findOneAndUpdate(
        { _id: new ObjectId(id) },
        { $set: updatedUser },
        { returnOriginal: false }
      );

      res.send(result.value);

    });

    // Get User for Build Profile Info.
    app.get('/user', async (req, res) => {
      const email = req.query.email;
      const user = await usersCollection.findOne({ email });
      // console.log(user);
      res.send(user);
    })



    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);


app.get('/', (req, res) => {
  res.send('Asslamualikom Server Is Running')
})

app.listen(port, () => {
  console.log('Hey! Developer!! No Pain No Gain');
  console.log(`Server is Running On Port ${port}`);
})