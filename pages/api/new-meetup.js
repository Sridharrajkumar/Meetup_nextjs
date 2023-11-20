
import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body; // Change from res.body to req.body

    const client = await MongoClient.connect(
        'mongodb+srv://sri:eh3zEnXdCGA5Y1Of@cluster0.hcruhil.mongodb.net/meetup?retryWrites=true&w=majority'
    );

    const db = client.db();

    const meetupCollections = db.collection("meetups");

    const result = await meetupCollections.insertOne(data);
    
    client.close();

    res.status(201).json({ message: 'Meetup inserted' }); 
  }
 
}

export default handler;

