import {BrowserRouter, Route, Routes} from "react-router-dom";
import Movies from "../Components/Movies/Movies";
import Home from "../Components/Home/Home";
function App() {
  return (
    <div className="root-wrap">
        <BrowserRouter>
          <Routes>
            <Route path="/"element={<Home/>}/>
            <Route path="/movie" element={<Movies/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
