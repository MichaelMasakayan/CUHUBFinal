import "./header-style.css";
import React from "react";
import pic from "../images/computer_science_club_logoV1.jpg";

class EventHeader extends React.Component {
  render() {
    return (
      <div class="d-flex align-items-center header-style">
        <div class="py-4">
          <img src={pic} alt="Profile" class="ml-4 header-img"></img>
        </div>
        <div class="align-self-center flex-grow-1">
          <ul>
            <li>
              <h1>PIZZA STUDY SOCIAL</h1>
            </li>
            <li>Computer Science Club</li>
            <li>April 10, 7:00pm, Online</li>
          </ul>
        </div>
        <div class="mx-2">
          <button class="btn btn-primary me-md-2 btn-lg" type="button">
            Link
          </button>
        </div>
        <div class="mr-4">
          <button class="btn btn-primary btn-lg" type="button">
            Contact
          </button>
        </div>
      </div>
    );
  }
}

export default EventHeader;
