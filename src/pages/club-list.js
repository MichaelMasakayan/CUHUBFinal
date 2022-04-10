import "./header-style.css";
import avatar1 from "../images/computer_science_club_logoV1.jpg";
import avatar2 from "../images/gwc.jpeg";
import avatar3 from "../images/spike ball.jpeg";

export default function ClubList() {
  return (
    <div>
      <h3 class="clublist-h3-spacing">Your Clubs</h3>
      <div class="flex-container">
        <div class="flex-child">
          <div>
            <img class="club-img" src={avatar1} alt="club img" />
          </div>
        </div>
        <div class="flex-child">
          <div>
            <img class="club-img" src={avatar2} alt="club img" />
          </div>
        </div>
        <div class="flex-child">
          <div>
            <img class="club-img" src={avatar3} alt="club img" />
          </div>
        </div>
      </div>
      <div class="flex-container">
        <div class="flex-child">Computer Club</div>
        <div class="flex-child">Girls Who Code</div>
        <div class="flex-child">Spikeball Club</div>
      </div>
    </div>
  );
}
