import EventHeader from "./event-header";
import List from "./list";
import "./header-style.css";
import horrorFilm from "../images/cs pizza social.png";

export default function ClubProfile() {
  return (
    <div class="row">
      <div>
        <EventHeader />
      </div>
      <div class="column middle">
        <h2 class="h1">Description</h2>
        <p class="p">
          This week we are going to be hosting a study session where we will be
          providing pizza. We will be in the Ideation Zone in Swenson Hall this
          Tuesday, March 15th, from 7-8 P.M. So come join us to get your
          projects done, study for tests or even just enjoy some pizza. Good
          luck on midterms for those of you who have any this week and we look
          forward to seeing you on Tuesday.{" "}
        </p>
      </div>
      <div class="column side">
        <h2 class="h1">Poster</h2>
        <img
          src={horrorFilm}
          class="column side image"
          alt="horror club event"
        />
      </div>
    </div>
  );
}
