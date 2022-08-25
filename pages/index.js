import HeadLayout from "../components/layout/Head";
import app from "../firebase/clientApp";
import { useRouter } from "next/router";
import { collection, addDoc, getDocs } from "firebase/firestore";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export default function Home() {
  const db = app.firestore();
  const router = useRouter();
  const auth = getAuth();

  function handleGoogle() {
    const google = new GoogleAuthProvider();
    signInWithPopup(auth, google)
      .then(async (result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;

        // The signed-in user info.
        const newUser = result.user;
        const { email, displayName, uid } = newUser;
        const allUsers = await getDocs(collection(db, "users"));
        allUsers.forEach(async (user) => {
          const data = Object.entries(user.data());
          for (let [key, value] of data) {
            if (key === "uid") {
              //if there is no duplicated uid then add this new user to firestore db.
              if (value !== uid) {
                const addUser = await addDoc(collection(db, "users"), {
                  email: email,
                  name: displayName,
                  uid: uid,
                  setup: false,
                });
                console.log(addUser);
              } else {
                console.log("duplicated uid");
              }
            }
          }
        });
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
    router.push("/view");
  }

  function handleSignout() {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        router.reload();
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  }

  return (
    <>
      <HeadLayout title="home" content="landing page" />
      <main>
        <nav>
          <ul>
            <li>logo</li>
            <li>
              <button onClick={handleGoogle}>Google Sign in</button>
            </li>
          </ul>
        </nav>
      </main>

      <footer>
        <button onClick={handleSignout}>Signout</button>
      </footer>
    </>
  );
}
