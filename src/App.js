import React from 'react';
import './App.css';
import store from './store/store';
import {Provider} from 'react-redux'
import {HashRouter,Route} from 'react-router-dom'

import MovieNavbar from './components/layout/MovieNavbar';
import MovieFooter from './components/layout/MovieFooter';
import Landing from './components/home/Landing';
import Movie from './components/home/Movie';
function App() {
  return (
   
     <Provider store={store}>
        <HashRouter>
          <MovieNavbar/>
          <Route path="/movie/:id" exact component={Movie} />
          <Route path="/" exact component={Landing}/>
          <MovieFooter/>
          
     </HashRouter>
     </Provider>
    
  );
}

export default App;
