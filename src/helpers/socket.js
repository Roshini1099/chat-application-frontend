import io from 'socket.io-client';
import {store} from '../helpers/store'
import {currentchatactions} from '../actions/currentchatactions'
var socket = null;
var times;
const PATH = '';


export const initialise = (userId)=>{
    // const store  = store.getState();
    console.log('initalise',userId)
    console.log('inside initalise')
    let user = JSON.parse(localStorage.getItem('user'));
    if(socket===null || socket.connected==false)
    {
        socket= io('http://localhost:3333',{
            auth:{
                token: true,
                userId:userId
            },
            reconnection: true,
          });
    }
      console.log(socket)
    socket.on('connect',()=>{
        console.log('socket connected',socket.id);
    })
    socket.on('disconnect',()=>{
        console.log('socket disconected')
        socket.disconnect();
    })
    networkError();
    alllisteners();
}

const networkError= ()=>{
    socket.on('connect_error',(msg)=>{
        console.log('connection error', msg);
    })
}

const alllisteners = ()=>{
    socket.on('typing',(payload)=>{
        let state = store.getState();
        if(state.currentChat.currentchat._id==payload.chatId)
        {
            console.log(true)
            store.dispatch(currentchatactions.typing(payload.isTyping,payload.userName))
            clearTimeout(times);
            times=setTimeout(()=>{
                store.dispatch(currentchatactions.typing(false,null))
            },800)

        }
        
    })

    socket.on('getnewchat',(payload)=>{
        let user = store.getState();
        console.log(user.authentication.user)
        store.dispatch(currentchatactions.fetchChat(payload.chatId,user.authentication.user));
        console.log('check new chat');

    })

    socket.on('delivered',()=>{
        //dispatch chatId  and index
    })

    socket.on('seen',()=>{
        //dispatch chatId  and index
    })

    socket.on('newDM',()=>{
        //call update chat api
    })
}
export const typing = (payload)=>{
    console.log('emitting the socket event typing',payload)
    socket.emit('typing',payload)
}
const seen = ()=>{
    // socket.emit('seen',payload);
}

export const newMessage = (payload)=>{
    socket.emit('getnewchat',payload);
}

const delivered = ()=>{
    // socket.emit('delivered',payload);
}

const newDM = ()=>{
    // socket.emit('newDM',payload);
}

export const Socket=  socket;