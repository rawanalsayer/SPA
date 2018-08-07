import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
     <div> 
      <div className="images col-11 col-s-11">
         <br/>
         <h1>Contact Me</h1>
        <div className ="c">
           <h3><label>Name<br/>
           <span ><input type="text" name="your-name" value="" size="20"/></span> </label><br/></h3>
           <h3><label>Email<br/>
           <span ><input type="text" name="your-name" value="" size="20"/></span> </label><br/></h3>
           <h3><label>Message<br/>
           <span ><textarea name="your-message" cols="20" rows="10"></textarea></span>
           </label></h3>
           <h3><input type="submit" value="Send" className="button"/></h3>
        </div>
      </div>
    </div>


    );
  }
}
 
export default Contact;