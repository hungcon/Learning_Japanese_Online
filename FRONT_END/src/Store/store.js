var redux = require('redux');

const allReducerInitialState = {
    isRegistered: false,
}
const allReducer = (state = allReducerInitialState, action) => {
    switch (action.type) {
        case 'DISPLAY_FORM_CHOOSE_LEVEL':
            return {...state, isRegistered: !state.isRegistered}
        default:
            return state
    }
}

const store = redux.createStore(allReducer);
export default store;