import { Outlet } from "react-router-dom";
// import MainNavigation from "./components/MainNavigation";
import Footer from "./Components/UI/Footer";
import NavBar from "./Components/UI/NavBar";
function Root() {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
export default Root;
