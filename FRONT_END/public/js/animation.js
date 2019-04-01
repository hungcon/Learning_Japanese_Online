document.addEventListener("DOMContentLoaded", function(){
    //Lấy ra các button câu trả lời
    var answer = document.getElementsByClassName('q-button-answer');
    //Lấy ra các ô trống điền đáp án
    var place = document.getElementsByClassName('q-3-dot');
    
    //Lấy ra các span lưu text câu trả lời
    var blank = document.getElementsByClassName('blank');
    //Biến lưu chỗ trống điền đáp án
    var placeMountText;

    
    for (let i = 0; i < answer.length; i++) {
        //Click vào đáp án
        answer[i].onclick = function(){
            //disable button đáp án
            answer[i].disabled  = true;
            //Lấy id của câu trả lời (set cho thằng place để khi click vào place còn trả text về)
            var indexAnswer = answer[i].getAttribute('data-index');
            //Lấy ra ô đầu tiên trống
            for (let j = 0; j < place.length; j++) {
               if(place[j].innerText.trim() == ''){
                    placeMountText = place[j];
                    break;
               }
            }
            //Gán text
            placeMountText.innerHTML = blank[indexAnswer].innerText;
            //Gán thuộc tính
            placeMountText.setAttribute('data-indexSTPlace', indexAnswer);
            //Ẩn text ở button câu trả lời
            blank[indexAnswer].style = "opacity: 0";
        }
     }   
     
     for (let i = 0; i < place.length; i++) {
         place[i].onclick = function(){
             //Lấy ra id câu trả lời đã đc set (row 27)
             var indexSTPlace = place[i].getAttribute('data-indexSTPlace');
             //Hiện text 
             blank[indexSTPlace].style = "opacity: 1";
             //Bỏ disable
             blank[indexSTPlace].parentElement.disabled = false;
             //Gán place vừa click = rỗng
             place[i].innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
         }
     }
})

