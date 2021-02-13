import React,{ useEffect } from 'react';
import {Router,Switch,Route} from "react-router-dom";
import Login from './container/Login/login';
import Register from "./container/Register/register";
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import {history} from './helpers/history';
import { alertActions } from './actions/index';
import Chat from './container/Chat/chat';

const App =()=>{
  const alert = useSelector(state => state.alert);
  const dispatch = useDispatch();

  useEffect(() => {
      history.listen((location, action) => {
          // clear alert on location change
          // dispatch(alertActions.clear());
      });
  }, []);
  return(
    <div>
      {alert.message &&
                        <div className={`alert ${alert.type}`}>{alert.message}</div>
                    }
       <Router history={history}>
      <Switch>
        <Route exact path ="/" component={Register}/>
        <Route exact path ="/login" component={Login}/>
        <Route exact path ="/chat" component={Chat}/>
      </Switch>
    </Router>
    </div>
   
  )
}


export default App;
