import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import PositionsPage from "./pages/positions-page";
import HolgingsPage from "./pages/holgings-page";
import MainPage from "./pages/main-page";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/holgings-page":
        title = "";
        metaDescription = "";
        break;
      case "/main-page":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<PositionsPage />} />
      <Route path="/holgings-page" element={<HolgingsPage />} />
      <Route path="/main-page" element={<MainPage />} />
    </Routes>
  );
}
export default App;
