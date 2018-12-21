// for FondReducer
export default {
    changeFontSize: (dispatch, fontSize) => {
        return dispatch => {
            dispatch({
                type: "FONTSIZE_CHANGED",
                payload: {
                    fontSize: fontSize,
                }
            });
        }
    },
    // for ChatReducer
    addedChatMessage: (dispatch, chatUser, chatMessage) => {
        return dispatch => {
            dispatch({
                type: "CHAT_MESSAGE_ADDED",
                payload: {
                    chatMessage: chatMessage,
                    chatUser: chatUser,
                }
            });
        }
    },
    addToChatMessageArray: (dispatch, chatUser, chatMessage, chatImg) => {
        return dispatch => {
            dispatch({
                type: "ADD_CHAT_MESSAGE_TO_ARRAY",
                payload: {
                    chatMessage: chatMessage,
                    chatUser: chatUser,
                    chatImg: chatImg
                }
            });
        }
    }
}