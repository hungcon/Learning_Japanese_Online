document.addEventListener("DOMContentLoaded", function(){
    var answer = document.getElementsByClassName('q-button-answer');
    var place = document.getElementsByClassName('q-3-dot');
    var blank = document.getElementsByClassName('blank');
    var index = 0;
    for (let i = 0; i < answer.length; i++) {
        answer[i].onclick = function(){
            answer[i].disabled  = true;
            if(index >= answer.length) {
                return false;
            }
            var indexAnswer = answer[i].getAttribute('data-index');
            // console.log('Bạn đang click button số ' + indexAnswer + blank[indexAnswer].innerText);
            // console.log('Muốn set vào vị trí: '+index);
            var varPlace = place[index];
            // place[index].addEventListener("click", function(){
            //     blank[indexAnswer].style = "opacity: 1";
            //     blank[indexAnswer].parentElement.disabled = false;
            //     varPlace.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
            //     if(index > 0){
            //         index--;
            //     }
            // })
            place[index].innerHTML = blank[indexAnswer].innerText;
            place[index].setAttribute('data-indexSTPlace', indexAnswer)
            blank[indexAnswer].style = "opacity: 0";
            index++;
        }
     }   
     
     for (let i = 0; i < place.length; i++) {
         place[i].onclick = function(){
             if(index > 0){
                 index--;
             }
             var indexSTPlace = place[i].getAttribute('data-indexSTPlace');
             blank[indexSTPlace].style = "opacity: 1";
             blank[indexSTPlace].parentElement.disabled = false;
             place[i].innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
         }
     }
})