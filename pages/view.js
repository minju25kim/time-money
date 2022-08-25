import HeadLayout from "../components/layout/Head";
import NavLayout from "../components/layout/Nav";
function View() {
  return (
    <>
      <HeadLayout title="view" content="view page" />

      <main>
        <NavLayout />
        <span>view page</span>
      </main>

      <footer>
        <span>Twitter</span>
      </footer>
    </>
  );
}
export default View;
