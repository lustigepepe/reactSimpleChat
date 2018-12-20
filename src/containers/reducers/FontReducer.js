import _cloneDeep from 'lodash/cloneDeep';

let initialState = {
    fontSize: "14",
    textBoxOption: [{
     
        value: "",
        color: {
            r: '0',
            g: '0',
            b: '0',
            a: '1',
        },
        category: "All",
        availableFontFamilies: [],
        availableFontVariants: [],
    }],
    showLoader: false,
    userSelectedTextBox: 0,
    availableCategories: [],
    fonts: [],
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