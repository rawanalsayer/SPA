import React, { Component } from "react";
 
class About extends Component {
  render() {
    return (
       <div className ="images col-11 col-s-11 ">
        <br/>
         <h1> Academic info </h1>
         <div className ="con col-11 col-s-11 ">
           <ul>
             <h2>Education:</h2>
             <li><h3>2010 --> 2013 <br/>Alwaad Private Secondary School.<br/>High school degree 99.79%</h3></li>

             <li><h3>2013 --> <ins>Present</ins> <br/>Qassim University.<br/>Expected graduation 2018. GPA 4.65</h3></li>
           </ul>
           <ul>
             <h2>Courses:</h2>
             <li><h3>2016 - 05 --> 2016 - 08 <br/>Fundamentals of Psychological Support.</h3></li>
             <li><h3>2017 - 01 --> 2017 - 02 <br/>Introduction to Steganography.</h3></li>
           </ul>
           <ul>
             <h2>Projects:</h2>
             <h3><li>Image Processing Project using Matlab</li></h3>
             <h3><li>RSA Encryption Algorithm using C++ </li></h3>
             <h3><li>Smart Garden Graduation Project</li> </h3>
           </ul>

           <ul>
             <h2>Hobbies:</h2>
             <h3><li>Cooking</li></h3>
             <h3><li>Reading Novels</li></h3>
             <h3><li>Swimming</li></h3>
             <h3><li>Running</li></h3>
           </ul>

           <h1>The Fun Part</h1>
           <h4 className = 'i' >I'm a coffee addict</h4>
           <img src={require("./coffee.JPG")} />
           <h4 className = 'i' >Sometimes a cannibal</h4>

           <img src={require("./meat.JPG" )}/>
           <h4 className = 'i'> Just kidding. Actually sometimes I'm a baker</h4>
           <img src={require("./cake.JPG" )}/>
           <h4 className = 'i'>I participated in:</h4>
           <img src= {require("./int.JPG")} />
           <h4 className = 'i'>My favorite photo</h4>
           <img src={require("./ph.JPG")} />
        </div>
       </div>
     
    

    );
  }
}
 
export default About;