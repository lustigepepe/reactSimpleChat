import _cloneDeep from 'lodash/cloneDeep';

let initialState = {
    chatMessage: "",
    chatUser: "",
}
let initialStateWithUsers = {
    chats: [{
        username: "Jon Do",
        content: "How are you doing!",
        img: "dogPic",
    }, {
        username: "Kim Kun",
        content: "yes and you",
        img: "catPic"
    },  {
        username: "Jon Do",
        content: "Me too",
        img: "dogPic",
    }],
};

// export function ChatReducer(state = initialState, state = initialState, action) {
export function ChatReducer(state = initialState, action) {
    let newState = _cloneDeep(state);
    switch (action.type) {
        case "CHAT_MESSAGE_ADDED":
            newState.chatMessage = action.payload.chatMessage;
            newState.chatUser = action.payload.chatUser;
            break;

        case "ADD_CHAT_MESSAGE_TO_ARRAY":
            initialStateWithUsers.push({username: action.payload.chatUser,
            content: action.payload.chatMessage, img: action.payload.chatImg})
        break;
        default:
            break;
    }
    return newState
}