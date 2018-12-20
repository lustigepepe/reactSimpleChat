import React from 'react';

const Message = ({chatClass, chat, user}) => (
    // <li className={`${chatClass} ${user === chat.username ? "right" : "left"}`}>
    <li className={`chat ${user === chat.username ? "left" : "right"}`} style={chatClass} >
        <img src={chat.img} alt={`${chat.username}'s profile pic`} />
        {chat.content}
    </li>
);

export default Message;