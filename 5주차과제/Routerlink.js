import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./Main";
import Movie from "./Movie";
import Moviemain from "./Moviemain";

function Routerlink() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Moviemain" element={<Moviemain />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Routerlink;
