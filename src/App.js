import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Main from "./Main.js";
import About from "./components/About.js";
import "./App.css";
import Footer from "./components/Footer.js";
import "./components/Responsive.css";
import DailyUI from "./components/DailyUI.js";
import Renovare from "./components/Renovare.js";
import Illustrations from "./components/Illustrations.js";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="body">
          <Route exact path="/" component={Main} />
          <Route path="/about" component={About} />
          <Route path="/renovare" component={Renovare} />
          <Route path="/dailyui" component={DailyUI} />
          <Route path="/illustrations" component={Illustrations} />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
