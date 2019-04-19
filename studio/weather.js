var humidity; //Humidity, %

$(document).ready(function(){

    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=5128581&units=metric&APPID=f672f030db4cd256883d4ea0f4080826', 
        dataType: 'jsonp',
        success: function(results){
            weathertext = results.weather[0].main;
            weatherdescription = results.weather[0].description;
            humidity = results.main.humidity;
           

            myWeatherInterpretation();

        }
    });
    function myWeatherInterpretation(){
        

        $('.p1').append('humidity: ' + humidity + '</br> ');

    }     
});

   //ny
    $(document).ready(function(){

    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=5128581&units=metric&APPID=f672f030db4cd256883d4ea0f4080826', //CHANGE THE URL TO YOUR API QUERY
        dataType: 'jsonp',
        success:function(results){

            humidity = results.main.humidity;
            myWeatherInterpretation();

        }
    });
    function myWeatherInterpretation(){

        $('.p2').append('humidity: ' + humidity + '</br> ');

    }   
});

    //atl
    $(document).ready(function(){

    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=4180439&units=metric&APPID=f672f030db4cd256883d4ea0f4080826', 
        dataType: 'jsonp',
        success: function(results){
            humidity = results.main.humidity;
            myWeatherInterpretation();

        }
    });    