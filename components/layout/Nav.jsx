import Button from "@mui/material/Button";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";

import Setting from "./Setting";
import { useState } from "react";

function NavLayout() {
  const [open, setOpen] = useState(false);

  function handleDrawer() {
    return open ? setOpen(false) : setOpen(true);
  }

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
        <Setting open={open} setOpen={setOpen} />
      </SwipeableDrawer>
    </>
  );
}

export default NavLayout;
