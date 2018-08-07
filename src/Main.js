import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
}from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";

 
class Main extends Component {
  render() {
    return (
     <HashRouter>
      <div>
        <div className ="container col-12 col-s-12">

        
         <ul className="user-menu col-s-11 col-12">  
           <li title=""><NavLink to="/home">Home</NavLink></li>
           <li title=""><NavLink to="/about">About me</NavLink></li>
           <li title=""><NavLink to="/contact">Contact</NavLink></li>

         </ul>
        
        </div>
        <div className ="images col-11 col-s-11 ">
         <div className="content">
             <Route path="/home" component={Home}/>
             <Route path="/about" component={About}/>
             <Route path="/contact" component={Contact}/>
         </div>
         <div className = "footer col-3 col-s-5  ">
           <a href="mailto: rawanalsayer@gmail.com" title="Email"> <img alt="email icon" src={require("./email-icon.png")} /></a>
           <a href="https://www.instagram.com/rawanalsayer_/?hl=af" title="Instagram"t> <img alt="instagram icon" src={require("./instagram-icon.png")} /></a>
           <a href="https://www.linkedin.com/in/ra-wan-386b6111a/" title="Linkedin"> <img alt="linkedin icon" src={require("./linkedin-icon.png")} /></a>
         </div>
        </div>
      </div>
     </HashRouter>
    );
  }
}
 
export default Main;