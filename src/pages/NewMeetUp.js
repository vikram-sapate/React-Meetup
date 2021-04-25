import { useHistory } from "react-router-dom";
import NewMeetUpForm from "../components/meetups/NewMeetUpForm";

function NewMeetUpPage() {
  const history = useHistory();
  function addMeetupHandler(meetUpData) {
    fetch("https://meetup-b7cff-default-rtdb.firebaseio.com/meetups.json", {
      method: "POST",
      body: JSON.stringify(meetUpData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      history.replace("/");
    });
  }
  return (
    <section>
      <h1>Add new Meetup</h1>
      <NewMeetUpForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetUpPage;
