import React , {Component} from "react";
import photo from "./photoProfile.png";
import photo1 from "./profile.png";


class NewComp extends Component {
    constructor(props) {
        super(props);
        this.state={
            fullName:"",
            bio:"",
            profession:"",
            click:"click",
            imgSrc: photo1
        
     };
    }
     buttonchange = ()=>{
         this.setState ({
            fullName:"Ellouze Mohamed",
            bio:"AaAaAaAaAa",
            profession:"Etudiant",
            click:"click",
            imgSrc: photo

         })
         styles={
            fontstyle:"italic",
            color:"purple"
          };
    render ()
return (
<div className="App">
    
    
    <h3 style="styles">
        fullName:{this.state.fullName}
        bio:{this.state.bio}
        profession:{this.state.profession}
        photoprofile:{this.state.imgSrc}
    </h3>
    
    
    <button onClick={this.buttonchange}>{this.state.click}</button>
</div>
);
}
}