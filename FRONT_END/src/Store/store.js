var redux = require('redux');

const allReducerInitialState = {
    isRegistered: false,
    // Biến để check xem người dùng xem lại  đáp án có chọn lại  hay không  bỏ qua next tiếp 
    answeredQs : false,
    currentLocationQs : 0,
    displayNextButton: false,
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
        case 'DISPLAY_NEXT_BUTTON':
            return {...state, displayNextButton: true}
        case 'HIDE_NEXT_BUTTON':
            return {...state, displayNextButton: false}
        case 'DISPLAY_PRE_BUTTON':
            return {...state, displayPreButton: true}
        case 'HIDE_PRE_BUTTON':
            return {...state, displayPreButton: false}    
        case 'GET_ANSWER_NAME':
            return {...state, answerData: action.answerData,idCurrentQuestion:action.answerData.idQuestion}
        case 'ADD_ANSWER':
            return {...state, userAnswer:[...state.userAnswer, action.answerAdd] }
        case 'UPDATE_LOCATION_QUESTION':
            return {...state,currentLocationQs:action.currentLocation}
        case 'UPDATE_STATUS_ANSWERED':
            return {...state,answeredQs:true}      
        case 'RESET_STATUS_ANSWERED':
            return {...state,answeredQs:false}    
        case 'UPDATE_ANSWER':
            var newUserAnswer = [];
            for(var i=0;i<state.userAnswer.length;i++){
                if(state.userAnswer[i].idQuestion === (action.answerUpdate.idQuestion)){
                    state.userAnswer[i].answerData = action.answerUpdate.answerData;
                    // state.userAnswer[i].checkAnswered = action.answerUpdate.checkAnswered
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