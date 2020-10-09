import React from 'react';
//import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import { Avatar, IconButton } from "@material-ui/core";
import './Sidebar.css';

function Sidebar() {
    return (
        <div className="sidebar">
           <div className="sidebar__header">
               <div className="sidebar__headerRight">
                <IconButton>
                   <DonutLargeIcon />
                </IconButton>
                 
               </div>
           </div>
        </div>
    )
}

export default Sidebar;
