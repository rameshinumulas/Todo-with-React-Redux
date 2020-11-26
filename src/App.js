import React from 'react';
import './App.css';
import './index.css';
import {Provider} from 'react-redux'
import store from './Redux/Store';
import Routerpage from './Routers/Routerpage';

function App() {
  return (
    <Provider store={store} >
    <div className="App" >
      <Routerpage />    
    </div>
   </Provider>
  );
}

export default App;
