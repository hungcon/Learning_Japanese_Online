var redux = require('redux');

const allReducerInitialState = {
    isRegistered: false,
    userAnswer: [],
    answerData: '',
    notification: {
        status: false,
        class: '',
        message: ''
    }
}
const allReducer = (state = allReducerInitialState, action) => {
    switch (action.type) {
        case 'DISPLAY_FORM_CHOOSE_LEVEL':
            return {...state, isRegistered: !state.isRegistered}
        case 'GET_ANSWER_NAME':
            return {...state, answerData: action.answerData}
        case 'ADD_ANSWER':
            return {...state, userAnswer:[...state.userAnswer, action.answerAdd] }
        case 'SHOW_MESSAGE':
            return {...state, notification: {...state.notification, status: true, class: action.class, message: action.message} };
        case 'HIDE_MESSAGE':
            return {...state, notification: {...state.notification, status: false, class: '', message: ''} };
        default:
            return state
    }
}

const store = redux.createStore(allReducer);
export default store;