
var humidity1;
var humidity2;


//Atlanta
$(document).ready(function () {

    $.ajax({

        url: 'https://api.openweathermap.org/data/2.5/weather?id=4180439&units=metric&APPID=f672f030db4cd256883d4ea0f4080826',
        dataType: 'jsonp',
        success: function (results) {
        
            humidity1 = results.main.humidity;


            myWeatherInterpretation();

        }
    });

    function myWeatherInterpretation() {
        $('#one').append('</br> '  + humidity1);
            
                
        $(".bottle1").css({"animation-duration": "1s",});
        $(".cap1").css({"animation-duration": "1s",});
        
        console.log(humidity1);
        
            if (humidity1 < 50) {
      $('.bottle1').css({
        "animation-duration": "6s"
      });
    }
            if (humidity1 < 50) {
      $('.cap1').css({
        "animation-duration": "6s"
      });
    }
              else if (humidity1 > 50) {
      $('.bottle1').css({
        "animation-duration": "1s"
      });
    }
         else if (humidity1 > 50) {
      $('.cap1').css({
        "animation-duration": "1s"
      });
    }
       
        
    }
});
        
        



/////////////New York////////////
$(document).ready(function () {

$.ajax({
        url: 'https://api.openweathermap.org/data/2.5/weather?id=5128581&units=metric&APPID=f672f030db4cd256883d4ea0f4080826',
        dataType: 'jsonp',
        success: function (results) {
      
            humidity2 = results.main.humidity;


            myWeatherInterpretation();

        }
    });

    function myWeatherInterpretation() {
        $('#two').append('</br> ' + humidity2);
        
        $(".bottle2").css({"animation-duration": "1s",});
        $(".cap2").css({"animation-duration": "1s",});
        
        console.log(humidity2);
        
            if (humidity2 = 50) {
      $('.bottle2').css({
        "animation-duration": "1s"
      });
    }
            if (humidity2 = 50) {
      $('.cap2').css({
        "animation-duration": "1s"
      });
    }

        
        
        
        
        
        
        
    }
});



