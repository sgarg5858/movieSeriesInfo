import React from 'react';
import './App.css';
import store from './store/store';
import {Provider} from 'react-redux'

import MovieNavbar from './components/MovieNavbar';
import MovieFooter from './components/MovieFooter';
function App() {
  return (
    <div>
     <Provider store={store}>
     <MovieNavbar/>
     <MovieFooter/>
     </Provider>
    </div>
  );
}

export default App;
