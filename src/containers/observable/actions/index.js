export const updateChat = chatMessage => ({
    type: "UPDATE_CHAT",
    payload: { chatMessage }
  });
  

  export const updateChatFailed = () => ({
    type: "UPDATE_CHAT_FAILED"
  });
  