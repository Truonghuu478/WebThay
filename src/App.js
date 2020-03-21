import React from 'react';
import './App.css';
import './styles/main.scss';
import Header  from './Component/Home';
import Carousel from "./Component/Carousel";
import About from "./Component/About";
import  Services  from './Component/Services';
import  OurTeam from './Component/ourTeam';
import Footer from "./Component/Footer"
import ShowIn from './Component/ShowIn';
function App() {
  return (
    <div>
    <Header/>
    <Carousel/>
    <About/>
   <Services/>
    <ShowIn/>
    <OurTeam/>
    <Footer/>
    </div>
  );
}

export default App;
