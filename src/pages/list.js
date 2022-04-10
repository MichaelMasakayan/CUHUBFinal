import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import avatar1 from "../images/computer_science_club_logoV1.jpg";
import avatar2 from "../images/gwc.jpeg";
import avatar3 from "../images/spike ball.jpeg";

export default function AlignItemsList() {
  return (
    <>
      <h3>Your Events</h3>
      <List
        sx={{ width: "100%", maxWidth: "3fr", bgcolor: "background.paper" }}
      >
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Computer Science Club" src={avatar1} />
          </ListItemAvatar>
          <ListItemText
            href="https://7g7ygp.csb.app/settings"
            primary="Pizza Study Session"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Computer Science Club
                </Typography>
                {" — 4/12, 7pm, Ideation Zone"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Girls Who Code" src={avatar2} />
          </ListItemAvatar>
          <ListItemText
            primary="Resume Workshop"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Girls Who Code
                </Typography>
                {" — 4/20, 5pm, Ideation Zone"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Spikeball Club" src={avatar3} />
          </ListItemAvatar>
          <ListItemText
            primary="Spikeball Tournament"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Spikeball Club
                </Typography>
                {" — 4/22, 2pm, Musco Lawn"}
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
    </>
  );
}
