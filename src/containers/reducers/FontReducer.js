import _cloneDeep from 'lodash/cloneDeep';

let initialState = {
    fontSize: "14",
}

export function FontReducer(state = initialState, action) {
    let newState = _cloneDeep(state);
    switch (action.type) {
        case "FONTSIZE_CHANGED":
            newState.fontSize = action.payload.fontSize;
            break;
        default:
            break;
    }
    return newState
}