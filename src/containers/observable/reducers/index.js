
const initialState = {};

export const ChatMessage = (state = initialState, action) => {
    switch (action.type) {
      case "UPDATE_CHAT":
        return action.payload.chatMessage
      default:
        return state;
    }
  };
  