/* eslint-disable react/jsx-key */
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './components/Header';
import SliderImages from './components/SliderImages';
import CardsSlider from './components/CardsSlider';
import Premieres from './components/Premieres';
import Footer from './components/Footer';
// import AllMovies from './components/AllMovies';
import AllMoviesFetch from './components/AllMoviesFetch';
// import SingleMovie from './components/SingleMovie';
import SingleMovieFetch from './components/SingleMovieFetch';
import Registration from './components/Registration';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <div>
      <Header/>
      <Routes>
        <Route path="/" element={<div><SliderImages/>,<CardsSlider/>,<Premieres/></div>}></Route>
        <Route exact path='/movies' element={<AllMoviesFetch/>}></Route>
        <Route exact path='/movie/:movid' element={<SingleMovieFetch/>}></Route>
        <Route exact path='/register' element={<Registration/>}></Route>
      </Routes>    
      <Footer/>
      </div>
    </Router>
    
  </React.StrictMode>,
);
