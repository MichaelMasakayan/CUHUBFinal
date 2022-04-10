import ClubHeader from "./club-header";
import List from "./list";
import RosterList from "./roster-list";

export default function ClubProfile() {
  return (
    <div>
      <div class="row">
        <div>
          <ClubHeader />
        </div>
        <div class="column middle">
          <h2 class="h1">Description</h2>
          <p class="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud...
          </p>
        </div>
        <div class="column side">
          <List />
        </div>
      </div>
      <div class="row mt-5">
        <div class="column">
          <RosterList />
        </div>
      </div>
    </div>
  );
}
