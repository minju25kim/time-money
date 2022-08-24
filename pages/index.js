import HeadLayout from "../components/layout/Head";

export default function Home() {
  return (
    <>
      <HeadLayout title="home" content="landing page" />

      <main>
        <nav>
          <ul>
            <li>logo</li>
            <li>Google Signin</li>
            <li>Facebook Signin</li>
          </ul>
        </nav>
      </main>

      <footer>
        <span>Twitter</span>
      </footer>
    </>
  );
}
