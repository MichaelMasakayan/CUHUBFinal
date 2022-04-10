import "./header-style.css";
import avatar1 from "../images/BarryBBenson.jpg";
import avatar2 from "../images/download.jpg";
import avatar3 from "../images/sweeney_l.jpg";

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
        <div class="flex-child">Barry B.</div>
        <div class="flex-child">Luna L.</div>
        <div class="flex-child">Sweeney T.</div>
      </div>
    </div>
  );
}
