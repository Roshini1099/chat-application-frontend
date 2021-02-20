import React,{ useEffect } from 'react';
import {Router,Switch,Route, BrowserRouter, useHistory} from "react-router-dom";
import Login from './container/Login/login';
import Register from "./container/Register/register";
import 'semantic-ui-css/semantic.min.css'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
// import {history} from './helpers/history';
import { alertActions } from './actions/index';
import Chat from './container/Chat/chat';
import 'semantic-ui-css/semantic.min.css'
import axios from './helpers/axios';
import authHeader from './helpers/authheader'
import { userConstants } from './actionTypes';

const App =(props)=>{
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authentication.user);
  const history =useHistory();
  const alert = useSelector(state => state.alert);
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");
	useEffect(() => {
		if (token) {
      const data = {
        userId
      };
      console.log(data)
      axios.post('/api/user/details', data,{ headers: authHeader() }).then((response) => {
        console.log(response.data)
        let chat = {user:response.data}
          // let data = await user.data;
          // console.log(response)
                  dispatch({
                      type: userConstants.LOGIN_SUCCESS,
                      payload: {user: chat},
            });
            history.push('/chat');
                  // history.push(from);
              },
              (error) => {
                  dispatch(failure(error.toString()));
                  history.push('/login');
              }
        // response.data;
      );
    }
  }, []);
  function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error };
}
  return(
    <div>
      <div>
      
      </div>
      
      {alert.message &&
                        <div className={`alert ${alert.type}`}>{alert.message}</div>
                    }
      
      <Switch>
        <Route exact path ="/" component={Register}/>
        <Route exact path ="/login" component={Login}/>
        <Route exact path ="/chat" render={(props) => (
                        <Chat {...props} user= {user} />)}/>
       
      </Switch>

    </div>
   
  )
}


export default App;
