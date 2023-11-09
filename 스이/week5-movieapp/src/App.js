import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import TV from "./pages/Tv";
import Person from "./pages/Celebirity";
import Header from "./components/Header";

function App() {
  return (
    <div className="root-wrap">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie" element={<Movies />} />
          <Route path="/tv" element={<TV />} />
          <Route path="/person" element={<Person />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
