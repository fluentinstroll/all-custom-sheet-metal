import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = (props) => (
  <div className="Layout">
    <NavBar />
    <div className="Content">{props.children}</div>
    <Footer />
  </div>
);

export default Layout;
