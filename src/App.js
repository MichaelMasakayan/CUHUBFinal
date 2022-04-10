import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
// import { Switch, Route, Redirect, useEffect } from "react-router";

import Home from "./pages/home.js";
import Clubs from "./pages/clubs.js";
import Calendar from "./pages/calendar";
import UniNav from "./pages/uni-navbar";
import StudentProfile from "./pages/student-profile";
import EventProfile from "./pages/event-profile";
import ClubProfile from "./pages/club-profile";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <UniNav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/calendar" component={Calendar} />
            <Route path="/clubs" component={Clubs} />
            <Route path="/settings" component={StudentProfile} />
            <Route path="/eventprofile" component={EventProfile} />
            <Route path="/clubprofile" component={ClubProfile} />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
