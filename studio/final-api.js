
var humidity1;
var humidity2;


/////////////Atlanta////////////
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


        console.log(humidity1);

            if (humidity1 > 0 && humidity1 < 10) {
      $('.peach').css({
        "animation-duration": "10s"
      });
    }
            else if (humidity1 > 11 && humidity1 < 20) {
      $('.peach').css({
        "animation-duration": "9s"
      });
    }
            else if (humidity1 > 21 && humidity1 < 30) {
      $('.peach').css({
        "animation-duration": "8s"
      });
    }
            else if (humidity1 > 31 && humidity1 < 40) {
      $('.peach').css({
        "animation-duration": "7s"
      });
    }
            else if (humidity1 > 41 && humidity1 < 50) {
      $('.peach').css({
        "animation-duration": "6s"
      });
    }
            else if (humidity1 > 51 && humidity1 < 60) {
      $('.peach').css({
        "animation-duration": "5s"
      });
    }
            else if (humidity1 > 61 && humidity1 < 70) {
      $('.peach').css({
        "animation-duration": "4s"
      });
    }
            else if (humidity1 > 71 && humidity1 < 80) {
      $('.peach').css({
        "animation-duration": "3s"
      });
    }
            else if (humidity1 > 81 && humidity1 < 90) {
      $('.peach').css({
        "animation-duration": "2s"
      });
    }
            else if (humidity1 > 91 && humidity1 < 100) {
      $('.peach').css({
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
        
        $(".apple").css({"animation-duration": "1s",});

        console.log(humidity2);
        
            if (humidity2 > 0 && humidity2 < 10) {
      $('.apple').css({
        "animation-duration": "10s"
      });
    }
            else if (humidity2 > 11 && humidity2 < 20) {
      $('.apple').css({
        "animation-duration": "9s"
      });
    }
            else if (humidity2 > 21 && humidity2 < 30) {
      $('.apple').css({
        "animation-duration": "8s"
      });
    }
            else if (humidity2 > 31 && humidity2 < 40) {
      $('.apple').css({
        "animation-duration": "7s"
      });
    }
            else if (humidity2 > 41 && humidity2 < 50) {
      $('.apple').css({
        "animation-duration": "6s"
      });
    }
            else if (humidity2 > 51 && humidity2 < 60) {
      $('.apple').css({
        "animation-duration": "5s"
      });
    }
            else if (humidity2 > 61 && humidity2 < 70) {
      $('.apple').css({
        "animation-duration": "4s"
      });
    }
            else if (humidity2 > 71 && humidity2 < 80) {
      $('.apple').css({
        "animation-duration": "3s"
      });
    }
            else if (humidity2 > 81 && humidity2 < 90) {
      $('.apple').css({
        "animation-duration": "2s"
      });
    }
            else if (humidity2 > 91 && humidity2 < 100) {
      $('.apple').css({
        "animation-duration": "1s"
      });
    }

}
});




