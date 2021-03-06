import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
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
import News from "./pages/News";
import DetailTour from "./pages/DetailTour";
import Header from "./components/navbar/Header";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Review from "./pages/Review";
import Order from "./pages/Order";
import AllReview from "./pages/AllReview";
import Footer from "./components/footer/Footer2";
import ButtonScrollTop from "./components/buttonscroll/ButtonScrollTop";
import MessengerCustomerChat from "react-messenger-customer-chat";
const theme = createTheme({
  typography: {
    fontFamily: "Inter, Roboto, san-serif",
  },
});

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <ScrollToTop />

        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home" exact component={Home} />
          <Route path="/about" component={About} />
          <Route exact path="/tours/" component={Tours} />
          <Route path="/tours/detailtour" component={DetailTour} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/profile" component={Profile} />
          <Route path="/order" component={Order} />
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/booking">
            <Booking />
          </Route>
          <Route path="/faqs">
            <FAQS />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/detail/review">
            <Review />
          </Route>
          <Route path="/news">
            <News />
          </Route>
          <Route path="/all-reviews">
            <AllReview />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
          {/* <Route exact path="/tours/:id" render={props => <DetailTour {...props.match.params} />} /> */}
          {/* <Route path="/tours/:id">
            <DetailTour />
          </Route> */}
        </Switch>
        <Footer />
        <MessengerCustomerChat
          pageId="109031571600773"
          appId="291000409568661"
        />
      </Router>
      <ButtonScrollTop />
    </ThemeProvider>
  );
}

export default App;
