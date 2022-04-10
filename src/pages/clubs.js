import PopList from "./popular-list";
import "./header-style.css";
import dropdown from "../images/realdrop.png";
export default function Clubs() {
  return (
    <div>
      <div class="column">
        <h3>Search for Clubs</h3>
        <input
          type="text"
          class="column side image two"
          placeholder="Search.."
        />
        <img src={dropdown} class="column side image two" alt="drop dwon" />
      </div>
      <div class="column">
        <PopList />
      </div>
    </div>
  );
}
