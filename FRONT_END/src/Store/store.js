var redux = require('redux');

const allReducerInitialState = {
    isRegistered: false,
    userAnswer: [],
    answerData: ''
}

const allReducer = (state = allReducerInitialState, action) => {
    switch (action.type) {
        case 'DISPLAY_FORM_CHOOSE_LEVEL':
            return {...state, isRegistered: !state.isRegistered}
        case 'GET_ANSWER_NAME':
            return {...state, answerData: action.answerData}
        case 'ADD_ANSWER':
            return {...state, userAnswer:[...state.userAnswer, action.answerAdd] }
        default:
            return state
    }
}

const store = redux.createStore(allReducer);
// Update store 
console.log(store.getState());
export default store;