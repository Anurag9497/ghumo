import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from '../Header';
import SlideShow from '../Carousel';
import Footer from '../Footer';
import ContactUs from '../ContactUs';
import About from '../About';
import Train from '../Train';
import Stays from '../Stays';
import Flights from '../Flights';

function App() {
  return (
      <Router>
          <Header />
          <Switch>
              <Route exact path="/">
                <SlideShow />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/contact">
                <ContactUs />
              </Route>
              <Route exact path="/stays">
                <Stays />
              </Route>
              <Route exact path="/flights">
                <Flights />
              </Route>
              <Route exact path="/trains">
                <Train />
              </Route>
              <Route exact path="/buses">
                Coming Soon...
              </Route>
              <Route exact path="/explore">
                Coming Soon...
              </Route>
              <Route exact path="/travelbucket">
                Coming Soon...
              </Route>
          </Switch>
          <Switch>
              <Route exact path="/policy">
                Coming Soon...
              </Route>
              <Route exact path="/faq">
                Coming Soon...
              </Route>
          </Switch>
          <Footer />
      </Router>
  );
}

export default App;
