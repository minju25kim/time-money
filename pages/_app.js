// 1. import `NextUIProvider` component
import { NextUIProvider } from "@nextui-org/react";
import { useState, useEffect } from "react";
import { firebase, authService, dbService } from "../firebase/firebase";

function MyApp({ Component, pageProps }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState([]);
  authService.onAuthStateChanged((user) => {
    if (user) {
      setLoggedIn(true);
      setUser(user);
    } else setLoggedIn(false);
  });
  return (
    // 2. Use at the root of your app
    <NextUIProvider>
      <Component
        {...pageProps}
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
        user={user}
        setUser={setUser}
      />
    </NextUIProvider>
  );
}

export default MyApp;
