import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

function Setting({ open, setOpen }) {
  function handleClose() {
    return open ? setOpen(false) : setOpen(true);
  }
  return (
    <Box sx={{ width: 500, backgroundColor: "fff" }}>
      <List>
        <ListItem onClick={handleClose}>
          <ListItemButton>
            <ListItemText>Close</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        {["View", "Currency", "Time", "Categories", "Theme"].map(
          (setting, index) => {
            return (
              <ListItem key={index}>
                <ListItemButton>
                  <ListItemText>{setting}</ListItemText>
                </ListItemButton>
              </ListItem>
            );
          }
        )}
      </List>
      <Divider />
      <List>
        <ListItem>
          <ListItemButton>
            <ListItemText>Account</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}

export default Setting;
