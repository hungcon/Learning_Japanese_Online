var redux = require('redux');

const allReducerInitialState = {
    isRegistered: false,
    // Biến để check xem người dùng xem lại  đáp án có chọn lại  hay không  bỏ qua next tiếp 
    answeredQs : false,
    currentLocationQs : 0,
    displayNextButton: false,
    // Mảng hiện thị danh sách đáp án của người dùng 
    userAnswer: [],
    answerData: '',
    // Lưu tạm thời các giá trị mà người test chọn đáp án 
    answerDataChoose :[],
    notification: {
        status: false,
        class: '',
        message: ''
    },
    numberOfBox:0,
    displayNextForChoose:false
}

const allReducer = (state = allReducerInitialState, action) => {
    switch (action.type) {
        case 'DISPLAY_FORM_CHOOSE_LEVEL':
            return {...state, isRegistered: !state.isRegistered}
        //  Ẩn hiện nút next cho câu hỏi abcd
        case 'DISPLAY_NEXT_BUTTON':
            return {...state, displayNextButton: true}
        case 'HIDE_NEXT_BUTTON':
            return {...state, displayNextButton: false}
        // Lấy đáp án câu trả lời abcd 
        case 'GET_ANSWER_NAME':
            return {...state, answerData: action.answerData,idCurrentQuestion:action.answerData.idQuestion}
        // Thêm mới đáp án mỗi khi click next    
        case 'ADD_ANSWER':
            return {...state, userAnswer:[...state.userAnswer, action.answerAdd] }  
        case 'UPDATE_LOCATION_QUESTION':
            return {...state,currentLocationQs:action.currentLocation}
        // Cập nhật trạng thái mỗi khi click vào đáp án ( xử lí trường hợp người dùng k chọn lại đáp án mà nhấn tiếp mà vẫn update )    
        case 'UPDATE_STATUS_ANSWERED':
            return {...state,answeredQs:true}      
        case 'RESET_STATUS_ANSWERED':
            return {...state,answeredQs:false} 
        // Cập nhật danh sách câu trả lời        
        case 'UPDATE_ANSWER':
            var newUserAnswer = [];
            for(var i=0;i<state.userAnswer.length;i++){
                if(state.userAnswer[i].idQuestion === (action.answerUpdate.idQuestion)){
                    state.userAnswer[i].answerData = action.answerUpdate.answerData;
                }
                newUserAnswer.push(state.userAnswer[i]);
            }
            return {...state, userAnswer:newUserAnswer }
        case 'GET_ANSWER_CHOOSE':
            return {...state,answerDataChoose:action.answerDataChoose}     
        case 'SHOW_MESSAGE':
            return {...state, notification: {...state.notification, status: true, class: action.class, message: action.message} };
        case 'HIDE_MESSAGE':
            return {...state, notification: {...state.notification, status: false, class: '', message: ''} };
        // edit by Chung  3/4/2019
        case 'GET_COUNT_BOX':
            return {...state, numberOfBox: action.numberOfBox };
        case 'SET_DEFAULT_NUMBER_BOX':
            return {...state, numberOfBox: 0};
        case 'DISPLAY_NEXT_BUTTON_CHOOSE':
            return {...state, displayNextForChoose: true};
        case 'HIDE_NEXT_BUTTON_CHOOSE':
            return {...state, displayNextForChoose:false};
        default:
            return state
    }
}

const store = redux.createStore(allReducer);
store.subscribe(()=>{
    console.log(JSON.stringify(store.getState()));
})

export default store;