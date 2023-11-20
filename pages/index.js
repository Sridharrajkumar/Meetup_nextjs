import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const Dummy_Meetups = [
  {
    id: "m1",
    title: "A first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
    address: "No.1/e subramainyan street chennai",
    description: "This is a dummy meetup",
  },
  {
    id: "m2",
    title: "A second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
    address: "No.1/e subramainyan street chennai",
    description: "This is a dummy meetup",
  },
  {
    id: "m3",
    title: "A third meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
    address: "No.1/e subramainyan street chennai",
    description: "This is a dummy meetup",
  },
  {
    id: "m4",
    title: "A fourth meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
    address: "No.1/e subramainyan street chennai",
    description: "This is a dummy meetup",
  },
];

const HomePage = (props) => {
  

  return <MeetupList meetups={props.meetups} />;
};

export async function getStaticProps() {
  // Call an API to fetch data for the homepage.

  return {
    props: {
      meetups: Dummy_Meetups,
    },
    revalidate: 50,
  };
}

export default HomePage;
