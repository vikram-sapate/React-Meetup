import { useContext } from "react";
import FavouritesContext from "../store/favourite-context";
import MeetupList from "../components/meetups/MeetUpList";

function FavouritesPage() {
  const favouriteCtx = useContext(FavouritesContext);

  let content;
  if (favouriteCtx.totalFavourite === 0) {
    content = <p>You got no favourite. Start adding it</p>;
  } else {
    content = <MeetupList meetups={favouriteCtx.favourites} />;
  }

  return (
    <section>
      <h1>My Favourites</h1>
      {content}
    </section>
  );
}

export default FavouritesPage;
