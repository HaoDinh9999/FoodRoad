import React from "react";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import "./index.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./pages/About";
import Tours from "./pages/Tours";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Gallery from "./components/gallery/Gallery";
import FAQS from "./pages/FAQS";
import DetailTour from "./pages/DetailTour";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/tours" component={Tours} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/faqs">
            <FAQS/>
          </Route>
          <Route path="/tour/detailtour">
            <DetailTour/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
