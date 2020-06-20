import React from 'react';
import './App.css';
import store from './store/store';
import {Provider} from 'react-redux'
import {HashRouter} from 'react-router-dom'

import MovieNavbar from './components/layout/MovieNavbar';
import MovieFooter from './components/layout/MovieFooter';
import Landing from './components/home/Landing';
function App() {
  return (
   
     <Provider store={store}>
        <HashRouter>
          <MovieNavbar/>
          <Landing/>
          <MovieFooter/>
     </HashRouter>
     </Provider>
    
  );
}

export default App;
