import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import DetailsFillingPage from "./Pages/DetailsFillingPage";
import CheckSelectedId from "./Components/CheckSelectedId";
import AboutUs from "./Pages/AboutUs";
import MyResumes from "./Pages/MyResumes";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />

       
        <Route
          exact
          path="/template/fill-details"
          element={
            <CheckSelectedId>
              <DetailsFillingPage />
            </CheckSelectedId>
          }
        />

        <Route exact path="/my/resumes" element={<MyResumes />} />

        <Route exact path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  );
};

export default App;
