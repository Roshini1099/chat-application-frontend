import io from 'socket.io-client';
import {store} from '../helpers/store'

var socket = null;
const PATH = ''
export const initialise = ()=>{
    console.log('inside initalise')
    if(socket===null || socket.connected==false)
    {
        socket= io('http://localhost:3333',{
            auth:{
                token: true
            }
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
    socket.on('typing',()=>{
        //dispatch the function.
    })

    socket.on('getnewchat',(payload)=>{
        //api call for getting new chats
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
const typing = (userId)=>{

}
const seen = ()=>{
    // socket.emit('seen',payload);
}

const newMessage = ()=>{
    // socket.emit('getnewchat',payload);
}

const delivered = ()=>{
    // socket.emit('delivered',payload);
}

const newDM = ()=>{
    // socket.emit('newDM',payload);
}

export const Socket=  socket;