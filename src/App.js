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
import Booking from "./pages/Booking";
import Footer from "./components/footer/Footer";
import DetailTour from "./pages/DetailTour";
import Order from "./pages/Order";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route exact path="/tours/" component={Tours} />
          <Route path="/tours/detail" component={DetailTour} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/order" component={Order} />
          <Route path="/gallery">setPrice
            <Gallery />
          </Route>
          <Route path="/booking">
            <Booking />
          </Route>
          <Route path="/faqs">
            <FAQS />
          </Route>
          {/* <Route exact path="/tours/:id" render={props => <DetailTour {...props.match.params} />} /> */}
          {/* <Route path="/tours/:id">
            <DetailTour />
          </Route> */}
        </Switch>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
