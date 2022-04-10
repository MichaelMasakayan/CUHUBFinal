import React from "react";
import List from "./list";
import ClubList from "./club-list";
import CurrentEvent from "./current-event";
import "./header-style.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <CurrentEvent />
      <div class="container home">
        <div class="row">
          <div class="col">
            <Link to="/eventprofile">
              <div class="floater-events"></div>
            </Link>
            <List />
          </div>
          <div class="col">
            <Link to="/clubprofile">
              <div class="floater-clubs"></div>
            </Link>
            <ClubList />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
