import React, { useState } from 'react';
import { Avatar, IconButton } from "@material-ui/core";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import SearchIcon from '@material-ui/icons/Search';
import './Chat.css';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import axios from './axios';
//import { SearchOutlined } from '@material-ui/icons';

function Chat({ messages }) {

  const [input, setInput] = useState("");
  const sendMessage = async (e) => {
       e.preventDefault();
       await axios.post("/messages/new", {
         message: input,
         name: "Demo name",
         timestamp: new Date().toUTCString(),
         recieved: false
       });
       setInput("");
  };


    return (
        <div className="chat">
          
         <div className="chat__header">
            <Avatar src="https://uploads.teamtreehouse.com/production/profile-photos/8288062/thumb_mohib1.jpg" alt="" />
            <div className="chat__headerInfo">
              <h3>Room Name</h3>
              <p>Last seen at...</p>
              </div>
              <div className="chat__headerRight">
                <IconButton>
                 <SearchIcon />
                </IconButton>
          
                <IconButton>
                  <AttachFileIcon />
                </IconButton>

                <IconButton>
                 <MoreVertIcon />
                </IconButton>
             </div>
           </div>
           <div className="chat__body">
             {messages.map((message) => (
              <p className={`chat__message ${message.recieved && "chat__reciever"}`}>
               <span className="chat__name">{message.name}</span>
                  {message.message}
               <span className="chat__timestamp">{message.timestamp}</span> 
              </p>
             ))}
             
             <p className="chat__message chat__reciever">
               <span className="chat__name"> Mohib </span>
                  this is a chat message!
               <span className="chat__timestamp">
                 {new Date().toUTCString()}
               </span> 
             </p>
           </div>


           <div className="chat__footer">
             <InsertEmoticonIcon />
             <form>
               <input 
               input={input} onChange={e => setInput(e.target.value)}
               placeholder="Type a message" type="text" />
               <button onClick={sendMessage} type="Submit">Send a message</button>
             </form>
             <MicIcon />
           </div>
        </div>
    )
}

export default Chat;
