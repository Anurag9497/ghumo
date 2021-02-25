import React from 'react';
import './App.css';
import Header from '../Header';
import SlideShow from '../Carousel';
import Footer from '../Footer';
import ContactUs from '../ContactUs';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
      <Router>
          <Header />
          <Switch>
              <Route exact path="/">
                <SlideShow />
              </Route>
              <Route exact path="/about">
                Coming Soon...
              </Route>
              <Route exact path="/contact">
                <ContactUs />
              </Route>
              <Route exact path="/login">
                Coming Soon...
              </Route>
              <Route exact path="/account">
                Coming Soon...
              </Route>
              <Route exact path="/stays">
                Coming Soon...
              </Route>
              <Route exact path="/flights">
                Coming Soon...
              </Route>
              <Route exact path="/trains">
                Coming Soon...
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
