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
import MapCompony from "./Component/Map";
function App() {
  // const root ={
  //   backGround:URL('../public/img/bg-2.jpg')
  // }
  return (
    <div  >
    <Header/>
    <Carousel/>
    <About/>
    <Services/>
    <ShowIn/>
    {/* <OurTeam/> */}
    <MapCompony/>
    <Footer/>
    </div>
  );
}

export default App;
