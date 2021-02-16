import React,{ useEffect } from 'react';
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Login from './container/Login/login';
import Register from "./container/Register/register";
import 'semantic-ui-css/semantic.min.css'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
// import {history} from './helpers/history';
import { alertActions } from './actions/index';
import Chat from './container/Chat/chat';
// import {Sidebar} from './container/Sidebar/sidebar';
import Sidebar from './components/sidebar/Sidebar'
const App =()=>{
  const alert = useSelector(state => state.alert);
  const dispatch = useDispatch();

  /*useEffect(() => {
      history.listen((location, action) => {
          // clear alert on location change
          // dispatch(alertActions.clear());
      });
  }, []);*/
  return(
    <div>
      {alert.message &&
                        <div className={`alert ${alert.type}`}>{alert.message}</div>
                    }
       <BrowserRouter /*history={history}*/>
      <Switch>
        <Route exact path ="/" component={Register}/>
        <Route exact path ="/login" component={Login}/>
        <Route exact path ="/chat" component={Chat}/>
        <Route exact path ="/slack" component={Sidebar}/>
      </Switch>
    </BrowserRouter>
    </div>
   
  )
}


export default App;
