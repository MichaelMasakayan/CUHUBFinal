import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

import avatar1 from "../images/APSA.jpeg";
import avatar2 from "../images/chess club.jpeg";
import avatar3 from "../images/film society.jpeg";

export default function AlignItemsList() {
  return (
    <>
      <h3>Popular Clubs</h3>
      <List sx={{ width: "100%", maxWidth: 500, bgcolor: "background.paper" }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="APSA Club" src={avatar1} />
          </ListItemAvatar>
          <ListItemText
            primary="APSA Club"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                ></Typography>
                {
                  "The Asian Pacific Student Association is the representing student organization for those who identify with or are interested in Asian and Pacific Islander culture."
                }
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Chapman Chess Club" src={avatar2} />
          </ListItemAvatar>
          <ListItemText
            primary="Chapman Chess Club"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                ></Typography>
                {
                  "The Chapman Chess Club is a recreational club centered around the game of chess. Students of all skill levels are welcome to come and play!"
                }
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="The Film Society" src={avatar3} />
          </ListItemAvatar>
          <ListItemText
            primary="The Film Society"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                ></Typography>
                {
                  "The Film Society is a student-led club dedicated to expanding the academic, cultural, and artistic interpretations of cinema within the student body. Our intention is to create a space outside the classroom to continue the intellectual and academic discussion and exploration of cinema through film screenings and other events. "
                }
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
    </>
  );
}
