import React from 'react';
//import {useState} from 'react';
//import Movie from './Components/Movie/Movie';
//import {movies} from './Components/Movie/movieDummy'; // 무비더미의 데이터를 가져옴
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Header from './Components/Header';
import AdPage from './Components/AdPage';
import LoginControl from './pages/LoginControl';
//import Home from './pages/Home';
import './index.css';



function App() {
	return (
		<div>
			<div className="root-wrap">
				<BrowserRouter>
					<Header/>
					<LoginControl/>
					<AdPage/>
					<Routes>
						<Route path="/HeaderMovie" element={Header} />
						<Route path="/HeaderTV" element={Header} />
						<Route path="/HeaderPerson" element={Header} />
					</Routes>
				</BrowserRouter>
			</div>
			
		</div>
	);

}

export default App;


