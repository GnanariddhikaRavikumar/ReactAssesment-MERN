import './App.css';
import Header from './components/Header';
//import Body from './components/Body';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

//import {createBrowserRouter} from "react-router-dom";
/**
 * Header
 * -Restaurant logo
 * -Navigation bar
 * Body
 * -Search bar
 * -Restaurant Cards
 *    -Image of Restaurant
 *    -Name
 *    -Cost
 *    -Rating
 *    -Timing
 * Footer
 *    -copyright
 *    -links
 *    -about Restaurant
 * 
 */

function App() {
  return (
    <>
    <Header />
    <Outlet /> 
    <Footer />
   
    </>
  );
}
// Outlet - only needed path is rendered
//creating router


export default App;


/**
 * 
 * 
 * 
 */