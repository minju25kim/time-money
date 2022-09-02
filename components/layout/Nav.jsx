import { Button } from "@nextui-org/react";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  signOut,
} from "firebase/auth";
import { useState, useEffect } from "react";

function Nav({ loggedIn }) {
  const [nav, setNav] = useState();
  const auth = getAuth();

  function handlePress(event) {
    const name = event.target.name;
    if (name == "google") {
      const google = new GoogleAuthProvider();
      signInWithRedirect(auth, google);
    }
    if (name == "logout") {
      signOut(auth);
    }
  }

  useEffect(() => {
    loggedIn ? setNav(true) : setNav(false);
  }, [loggedIn]);

  return (
    <nav>
      {nav ? (
        <>
          <Button onPress={handlePress} name="logout">
            Logout
          </Button>
          <Button>Setting</Button>
        </>
      ) : (
        <>
          <Button onPress={handlePress} name="google">
            Continue with Google
          </Button>
        </>
      )}
    </nav>
  );
}

export default Nav;
