import io from 'socket.io-client';
import {store} from '../helpers/store'
import {currentchatactions} from '../actions/currentchatactions'
var socket = null;
var times;
const PATH = '';


export const initialise = (userId)=>{
    console.log('initalise',userId)
    const state= store.getState();
    if(socket===null || socket.connected==false && state.authentication.user)
    {
        console.log('connecting the socket')
        socket= io('http://localhost:3333',{
            auth:{
                token: true,
                userId:userId
            },
            reconnection: true,
          });


        socket.on('connect',()=>{
            console.log('socket connected',socket.id);
            joinRoom(state.authentication.user.user.channels);
        })
        
        socket.on('disconnect',()=>{
            console.log('socket disconected')
            socket=null;
        })
        networkError();
        alllisteners();
        joinRoom(state.authentication.user.user.channels);
        
    }

}

const networkError= ()=>{
    socket.on('connect_error',(msg)=>{
        console.log('connection error', msg);
    })
}

const alllisteners = ()=>{
    socket.on('typing',(payload)=>{
        let state = store.getState();
        console.log('listening to the typing event')
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
        console.log('get new chat payload', payload);
        store.dispatch(currentchatactions.fetchChat(payload,user.authentication.user,user.currentChat.currentchat._id));
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

const joinRoom=(channels)=>{
    console.log('triggered join room event')
    socket.emit('joinroom',channels);
}

export const newMessage = (payload)=>{
    console.log('newmsgpayload',payload)
    socket.emit('getnewchat',payload);
}

const delivered = ()=>{
    // socket.emit('delivered',payload);
}

const newDM = ()=>{
    // socket.emit('newDM',payload);
}

export const Socket=  socket;