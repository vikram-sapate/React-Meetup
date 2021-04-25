import { useState, useEffect } from "react";
import MeetUpList from "../components/meetups/MeetUpList";

function AllMeetUpsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [loadedMeetups, setloadedMeetups] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    fetch("https://meetup-b7cff-default-rtdb.firebaseio.com/meetups.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }
        setIsLoading(false);
        setloadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return <section>Loading...</section>;
  }
  return (
    <section>
      <h1> All Meetups</h1>
      <MeetUpList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetUpsPage;
