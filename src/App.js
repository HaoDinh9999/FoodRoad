<<<<<<< HEAD
import React from 'react';
import Navbar from './components/navbar/Navbar';
import './App.css';
import './index.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './pages/About';
import Tours from './pages/Tours';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Contact from './pages/Contact';
import Review from './pages/Review';
=======
import React from "react";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import "./index.css";
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import About from "./pages/About";
import Tours from "./pages/Tours";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Gallery from "./components/gallery/Gallery";
import FAQS from "./pages/FAQS";
import Booking from "./pages/Booking";
import Footer from "./components/footer/Footer";
import DetailTour from "./pages/DetailTour";
import Header from "./components/navbar/Header";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
>>>>>>> upstream/mainFood

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
<<<<<<< HEAD
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/tours' component={Tours} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/sign-in' component={SignIn} />
          <Route path='/contact' component={Contact} />
          <Route path='/review' component={Review} />
=======
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/tours/detailtour" component={DetailTour} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/profile" component={Profile} />
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/booking">
            <Booking />
          </Route>
          <Route path="/faqs">
            <FAQS />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
>>>>>>> upstream/mainFood
        </Switch>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
