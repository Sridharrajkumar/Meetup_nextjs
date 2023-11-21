import Head from "next/head";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetup = () => {
  const addMeetupHandler = async (Data) => {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(Data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    
  };

  return (
    <div>
      <Head>
        <title>Create a new meetup</title>
        <meta
          name="description"
          content="create a new meetup and send to DB"
        />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </div>
  );
};

export default NewMeetup;

