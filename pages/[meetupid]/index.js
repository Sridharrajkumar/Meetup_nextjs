import MeetupDetails from "../../components/meetups/MeetupDetails";

const MeetUpdetails = () => {
  return (
    <MeetupDetails
      title="A fourth meetup"
      image="https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg"
      address="No.1/e subramainyan street chennai"
      description="This is a dummy meetup"
    />
  );
};

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupid:'m1',
        }
      },
      {
        params: {
          meetupid:'m2',
        }
      },

    ],
  }
}



export async function getStaticProps(context) {

  const meetupId=context.params.meetupid;

  console.log(meetupId);
  return {
    props: {
      meetupData: {
        title: "A fourth meetup",
        id: meetupId,
        image:"https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
        address:"No.1/e subramainyan street chennai",
        description:"This is a dummy meetup"
      }
    },

  }
}

export default MeetUpdetails

