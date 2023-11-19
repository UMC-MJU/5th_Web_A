import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css';
import Movies from './Components/Movie/Movies';
import Home from './pages/Home'
import Celebrity from './pages/Celebrity';
import MovieDetail from './pages/MovieDetail';
import TV from './pages/TV';
import NotFound from './pages/NotFound'
import LoginControl from './pages/LoginControl';

function App() {
	return (
		<div>
			<div className="root-wrap">
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Home/>} />
						<Route path="/Movies" element={<Movies/>} />
						<Route path="/TV" element={<TV/>} />
						<Route path="/Celebrity" element={<Celebrity/>} />
						<Route path="/dummy/:title" element={<MovieDetail/>} />
						<Route path="*" element={<NotFound/>} />
						<Route path="/LoginControl" element={<LoginControl/>} />
					</Routes>
				</BrowserRouter>
			</div>
			
		</div>
	);

}

export default App;


