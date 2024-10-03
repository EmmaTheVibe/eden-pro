import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home.jsx";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import NavBar from "./components/NavBar";
import ConnectBox from "./components/ConnectBox";
import DrawerTab from "./components/DrawerTab";
import Footer from "./components/Footer";
import useMediaQuery from "@mui/material/useMediaQuery";
import ScrollToTop from "./components/ScrollToTop";
import PopUp from "./components/PopUp";
import Slide from "@mui/material/Slide";

function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}

function App() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [popUp, setPopUp] = useState({
    open: false,
    Transition: SlideTransition,
  });

  const lg = useMediaQuery("(min-width: 700px)");
  const lg2 = useMediaQuery("(min-width: 800px)");

  const toggleDrawer = (event) => {
    if (
      lg ||
      (event &&
        event.type === "keydown" &&
        (event.key === "Tab" || event.key === "Shift"))
    ) {
      return;
    }

    setOpenDrawer(!openDrawer);
  };

  const showPopUp = () => {
    setPopUp({
      ...popUp,
      open: true,
    });
  };

  return (
    <main>
      <article>
        <BrowserRouter>
          {!lg && (
            <DrawerTab
              openDrawer={openDrawer}
              setOpenDrawer={setOpenDrawer}
              toggleDrawer={toggleDrawer}
            />
          )}
          <NavBar
            lg={lg}
            toggleDrawer={toggleDrawer}
            setOpenDrawer={setOpenDrawer}
          />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="about" element={<AboutPage lg2={lg2} />} />
            <Route
              path="contact"
              element={<ContactPage showPopUp={showPopUp} />}
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <ConnectBox showPopUp={showPopUp} />
          <Footer />
          <PopUp popUp={popUp} setPopUp={setPopUp} />
        </BrowserRouter>
      </article>
    </main>
  );
}

export default App;
