import React  from "react";
import "./App.css";
import NewComp from './Component/NewComp';

class App extends react.Component{

  styles={
    fontstyle:"bold",
    color:"teal"
  };

  render() {
      return (
    <div className="App">
    <h1 style={this.styles}> welcome to my  first state</h1>
    < NewComp/>
    </div>
    );
}
}
export default App;
