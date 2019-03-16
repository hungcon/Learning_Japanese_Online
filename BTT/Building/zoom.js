document.addEventListener("DOMContentLoaded", function(){
  window.onload = function() {
    var currFFZoom = 1;
    var currIEZoom = 100;
    console.log('load');
    $('#In').on('click',function(){
        if (navigator.userAgent.indexOf('Firefox') != -1 && parseFloat(navigator.userAgent.substring(navigator.userAgent.indexOf('Firefox') + 8)) >= 3.6){//Firefox
            var step = 0.02;
            currFFZoom += step; 
            $('#wrapper').css('MozTransform','scale(' + currFFZoom + ')');
        } else {
            var step = 10;
            currIEZoom += step;
            $('#wrapper').css('zoom', ' ' + currIEZoom + '%');
            console.log('+');
        }
    });

    $('#Out').on('click',function(){
        if (navigator.userAgent.indexOf('Firefox') != -1 && parseFloat(navigator.userAgent.substring(navigator.userAgent.indexOf('Firefox') + 8)) >= 3.6){//Firefox
            var step = 0.02;
            currFFZoom -= step;                 
            $('#wrapper').css('MozTransform','scale(' + currFFZoom + ')');

        } else {
            var step = 10;
            currIEZoom -= step;
            $('#wrapper').css('zoom', ' ' + currIEZoom + '%');
        }
    });
  };
})