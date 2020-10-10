import React from 'react';
import { Avatar, IconButton } from "@material-ui/core";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import SearchIcon from '@material-ui/icons/Search';
import './Chat.css';
//import { SearchOutlined } from '@material-ui/icons';

function Chat() {
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
        </div>
    )
}

export default Chat;
