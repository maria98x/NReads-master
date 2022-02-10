import React, { Component } from "react";
import { Route, Routes  } from "react-router-dom";
import "./App.css";
import SearchPage from "./SearchPage" 
import FirstPage from "./FirstPage";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { };
   
  }


  render() {

    return (
<div> 
<Routes>
  <Route exact path ="/" element={<FirstPage />} />
    <Route path="/SearchPage" element={<SearchPage />} /> 
  </Routes>
</div>
    );
    

  }
  
}
