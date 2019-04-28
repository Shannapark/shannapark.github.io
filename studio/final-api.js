
var humidity1;


//Atlanta
$(document).ready(function(){

    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=4180439&units=metric&APPID=f672f030db4cd256883d4ea0f4080826',
        dataType: 'jsonp',
        success: function(results){
        
            humidity1 = results.main.humidity;


            myWeatherInterpretation();

        }
    });

    function myWeatherInterpretation(){
        $('.atl').append('</br> '+humidity1 );

    }
});




//New York
$(document).ready(function(){

    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=5128581&units=metric&APPID=f672f030db4cd256883d4ea0f4080826',
        dataType: 'jsonp',
        success: function(results){
      
            humidity2 = results.main.humidity;


            myWeatherInterpretation();

        }
    });

    function myWeatherInterpretation(){
        $('.newyork').append('</br> '+ humidity2 );

    }
});



