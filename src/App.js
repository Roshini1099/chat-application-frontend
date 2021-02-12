import React from 'react';
import {Router,Switch,Route} from "react-router-dom";
import Login from './components/Login/login';
import Register from "./components/Register/register";
import './App.css'
import {history} from './helpers/history';


const App =()=>{
  return(
    <Router history={history}>
      <Switch>
        <Route exact path ="/" component={Register}/>
        <Route exact path ="/login" component={Login}/>
      </Switch>
    </Router>
  )
}


export default App;
