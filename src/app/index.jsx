import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import Home from '../pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default class App extends React.PureComponent {
  render() {
    return (
      <Router>
        <Header />
        <div className="main_content">
          <Route path="/" exact component={Home} />
        </div>
        <Footer />
      </Router>
    );
  }
}
