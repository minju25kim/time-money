import HeadLayout from "../components/layout/Head";
import { Button } from "@nextui-org/react";

function Home({ loggedIn, setLoggedIn, user, setUser }) {
  return (
    <>
      <HeadLayout title="home" content="landing page" />
      <main>
        <Button>Continue with Google</Button>
      </main>
    </>
  );
}
export default Home;
