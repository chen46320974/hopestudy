import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/header'
import Footer from './common/footer'
import Question from './pages/question';
import Facetoface from './pages/facetoface';
import Person from './pages/person';
import Home from './pages/home';
import Download from './pages/download';

class App extends Component {

  render() {
    return (
      	<BrowserRouter>
            <Header />
            <Route path='/' exact component={Home}></Route>
      	    <Route path='/question' exact component={Question}></Route>
            <Route path='/facetoface' exact component={Facetoface}></Route>
            <Route path='/person' exact component={Person}></Route>
            <Route path='/download' exact component={Download}></Route>
            <Footer />
      	</BrowserRouter>
    );
  }
}

export default App;