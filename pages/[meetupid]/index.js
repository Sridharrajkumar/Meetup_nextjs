import { MongoClient, ObjectId } from "mongodb";
import MeetupDetails from "../../components/meetups/MeetupDetails";
import { Fragment } from "react";
import Head from "next/head";

const MeetUpdetails = (props) => {
  return (
    <Fragment>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta
          name="description"
          content={props.meetupData.description}
        />
      </Head>
      <MeetupDetails
      title={props.meetupData.title}
      image={props.meetupData.image}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
    </Fragment>
  );
};

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://sri:eh3zEnXdCGA5Y1Of@cluster0.hcruhil.mongodb.net/meetup?retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetupCollections = db.collection("meetups");

  const data = meetupCollections.find({}, { _id: 1 }).toArray();


  return {
    fallback: false,
    paths: (await data).map((meetid) => ({
      params: {
        meetupid: meetid._id.toString(),
      },
    })),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupid;

  const client = await MongoClient.connect(
    "mongodb+srv://sri:eh3zEnXdCGA5Y1Of@cluster0.hcruhil.mongodb.net/meetup?retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetupCollections = db.collection("meetups");

  const data = await meetupCollections.findOne({_id: new ObjectId(meetupId)});
  // console.log(data);

  // console.log(meetupId);
  return {
    props: {
      meetupData: {
        title: data.title,
        id: data._id.toString(),
        image:data.image,
        address: data.address,
        description: data.description,
      },
    },
  };
}

export default MeetUpdetails;
