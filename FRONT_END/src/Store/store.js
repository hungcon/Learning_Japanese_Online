var redux = require('redux');

const allReducerInitialState = {
    isRegistered: false,
    currentLocationQs : 0,
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
            return {...state, answerData: action.answerData,idCurrentQuestion:action.answerData.idQuestion}
        case 'ADD_ANSWER':
            return {...state, userAnswer:[...state.userAnswer, action.answerAdd] }
        case 'UPDATE_LOCATION_QUESTION':
            return {...state,currentLocationQs:action.currentLocation}
        case 'UPDATE_ANSWER':
            var newUserAnswer = [];
            for(var i=0;i<state.userAnswer.length;i++){
                if(state.userAnswer[i].idQuestion === (action.answerUpdate.idQuestion)){
                    state.userAnswer[i].answerData = action.answerUpdate.answerData
                }
                newUserAnswer.push(state.userAnswer[i]);
            }
            return {...state, userAnswer:newUserAnswer }
        case 'SHOW_MESSAGE':
            return {...state, notification: {...state.notification, status: true, class: action.class, message: action.message} };
        case 'HIDE_MESSAGE':
            return {...state, notification: {...state.notification, status: false, class: '', message: ''} };
        default:
            return state
    }
}

const store = redux.createStore(allReducer);
store.subscribe(()=>{
    console.log(JSON.stringify(store.getState()));
})
export default store;