import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./Main";
import Moviemain from "./Moviemain";
import Detail from "./Detail";
import { movies } from "./api"; // 영화 데이터를 가져오는 API
import { tvs } from "./tvapi";
import Notfound from "./Notfound";
import LoginPage from "./LoginPage";
import Tvmain from "./Tvmain";

function Routerlink() {
  const [moviedata, setMovieData] = useState(movies.results); // 상태로 영화 데이터를 관리
  const [tvdata, setTvData] = useState(tvs.results);
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Moviemain" element={<Moviemain data={moviedata} />} />
          <Route path="Detail/:id" element={<Detail data={moviedata} />} />
          <Route path="*" element={<Notfound />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/Tvmain" element={<Tvmain data={tvdata} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Routerlink;
