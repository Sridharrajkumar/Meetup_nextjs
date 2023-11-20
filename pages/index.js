import {MongoClient} from 'mongodb'
import MeetupList from "../components/meetups/MeetupList";


const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

export async function getStaticProps() {
  // Call an API to fetch data for the homepage.

  const client = await MongoClient.connect(
    "mongodb+srv://sri:eh3zEnXdCGA5Y1Of@cluster0.hcruhil.mongodb.net/meetup?retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetupCollections = db.collection("meetups");

  const data = await meetupCollections.find().toArray();

  console.log(data);

  return {
    props: {
      meetups: data.map(meet => ({
        title: meet.title,
        image: meet.image,
        address: meet.address,
        description: meet.description,
        id:meet._id.toString()
      })),
    },
    revalidate: 50,
  };
}

export default HomePage;
