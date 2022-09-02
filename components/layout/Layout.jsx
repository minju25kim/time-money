import Nav from "./Nav";

function Layout({ loggedIn, setLoggedIn, user, setUser, children }) {
  return (
    <>
      <Nav loggedIn={loggedIn} />
      <main>{children}</main>
      <footer>
        <a>twitter</a>
        <a>FAQ</a>
      </footer>
    </>
  );
}

export default Layout;
