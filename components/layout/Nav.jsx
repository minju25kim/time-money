import Button from "@mui/material/Button";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { useState } from "react";
function NavLayout() {
  const [open, setOpen] = useState(false);

  function handleDrawer() {
    return open ? setOpen(false) : setOpen(true);
  }
  console.log(open);

  return (
    <>
      <Button onClick={handleDrawer}>
        Settings
        <SettingsApplicationsIcon />
      </Button>
      <SwipeableDrawer
        open={open}
        anchor="right"
        onClose={handleDrawer}
        onOpen={handleDrawer}
      >
        drawer
      </SwipeableDrawer>
    </>
  );
}

export default NavLayout;
