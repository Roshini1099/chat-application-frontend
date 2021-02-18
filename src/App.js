import React,{ useEffect } from 'react';
import {Router,Switch,Route, BrowserRouter} from "react-router-dom";
import Login from './container/Login/login';
import Register from "./container/Register/register";
import 'semantic-ui-css/semantic.min.css'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
// import {history} from './helpers/history';
import { alertActions } from './actions/index';
import Chat from './container/Chat/chat';
import 'semantic-ui-css/semantic.min.css'
import Header from './components/header/Header'
const App =()=>{
  const alert = useSelector(state => state.alert);
  const dispatch = useDispatch();
  return(
    <div>
      <div>
      
      </div>
      
      {alert.message &&
                        <div className={`alert ${alert.type}`}>{alert.message}</div>
                    }
       <BrowserRouter>
      <Switch>
        <Route exact path ="/" component={Register}/>
        <Route exact path ="/login" component={Login}/>
        <Route exact path ="/chat" component={Chat}/>
       
      </Switch>
    </BrowserRouter>
    </div>
   
  )
}


export default App;
