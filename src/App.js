import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Mainpage from "./mainpage/Mainpage";
import DetailsPage from "./detailspage/DetailsPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Mainpage} />
        <Route exact path="/video/:id" component={DetailsPage} />
      </div>
    </Router>
  );
}

export default App;
