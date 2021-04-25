import { Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";

import AllMeetUpsPage from "./pages/AllMeetUps";
import FavouritesPage from "./pages/Favourites";
import NewMeetUpPage from "./pages/NewMeetUp";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetUpsPage />
        </Route>
        <Route path="/new-meetup">
          <NewMeetUpPage />
        </Route>
        <Route path="/favourites">
          <FavouritesPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
