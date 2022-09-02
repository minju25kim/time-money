// 1. import `NextUIProvider` component
import { NextUIProvider } from "@nextui-org/react";
import { useState, useEffect } from "react";
import { firebase, authService, dbService } from "../firebase/firebase";
import Layout from "../components/layout/Layout";

function MyApp({ Component, pageProps }) {
  const [loggedIn, setLoggedIn] = useState();
  const [user, setUser] = useState();
  console.log(loggedIn);
  authService.onAuthStateChanged((user) => {
    user ? setLoggedIn(true) : setLoggedIn(false);
  });
  return (
    // 2. Use at the root of your app
    <NextUIProvider>
      <Layout
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
        user={user}
        setUser={setUser}
      >
        <Component {...pageProps} />
      </Layout>
    </NextUIProvider>
  );
}

export default MyApp;
