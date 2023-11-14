
import NewMeetupForm from '../../components/meetups/NewMeetupForm'

const NewMeetup = () => {

    const addMeetupHandler = (Data) => {

        console.log(Data);
        
    }


  return (
      <div>
          <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </div>
  )
}

export default NewMeetup