import React from "react";
import "./App.css"
import Navbar from "../src/components/Navbar.jsx";
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import Home from './components/pages/HomePage/Home'
import Footer from "./components/pages/Footer";
import Services from "./components/pages/Services/Services.jsx";
import Product from "./components/pages/product/product";
import SignUp from "./components/pages/singup/SignUp";
const App=()=>{
    return(
<>
<Router>
<Navbar/>
<Routes>
    <Route exact path='/' element={<Home/>}/> 
    <Route exact path='/services' element={<Services/>}/>
    <Route exact path='/product' element={<Product/>}/>
    <Route exact path='/sing-up' element={<SignUp/>}/>
</Routes>
<Footer/>
</Router>


</>
    )
}
export default App;