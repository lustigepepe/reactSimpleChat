import React from 'react';

const ChatMessage = ({chatClass, chat, user}) => (
    <li className={`chat ${user === chat.username ? "left" : "right"}`} style={chatClass} >
        <img src={chat.img} alt={`${chat.username}'s profile pic`} />
        {chat.content}
    </li>
);

export default ChatMessage;