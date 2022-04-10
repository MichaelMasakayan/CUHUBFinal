import "./header-style.css";
import React from "react";
import pic from "../images/computer_science_club_logoV1.jpg";

class ClubHeader extends React.Component {
  render() {
    return (
      <div class="d-flex align-items-center header-style">
        <div class="py-4">
          <img src={pic} alt="Profile" class="ml-4 header-img"></img>
        </div>
        <div class="align-self-center flex-grow-1">
          <ul>
            <li>
              <h1>Computer Science Club</h1>
            </li>
            <li>President: Michael</li>
            <li>Category: STEM</li>
            <li>Advisor: Linstead</li>
          </ul>
        </div>
        <div class="mx-2">
          <button class="btn btn-primary me-md-2 btn-lg" type="button">
            Join
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

export default ClubHeader;
