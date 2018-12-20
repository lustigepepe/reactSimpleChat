import _cloneDeep from 'lodash/cloneDeep';

let initialState = {
    chatMessage: "",
    chatUser: "",
}

// export function ChatReducer(state = initialState, state = initialState, action) {
export function ChatReducer(state = initialState, action) {
    let newState = _cloneDeep(state);

    switch (action.type) {
        case "CHAT_MESSAGE_ADDED":
            newState.chatMessage = action.payload.chatMessage;
            newState.chatUser = action.payload.chatUser;
            newState.chatId = action.payload.chatId;
            break;
        default:
            break;
    }
    return newState
}