var humidity;


$(document).ready(function () {


    $.ajax({
        url: 'https://api.openweathermap.org/data/2.5/weather?id=5128581&units=metric&APPID=f672f030db4cd256883d4ea0f4080826', 
        dataType: 'jsonp',
        success: function (results) {
            humidity = results.main.humidity;
            myWeatherInterpretation();
}
});
    
    function myWeatherInterpretation() {
       $('p').append('humidity: ' + humidity);
}    
});


//part2
$(document).ready(function () {
    $.ajax({
        url: 'https://api.openweathermap.org/data/2.5/weather?id=4180439&units=metric&APPID=f672f030db4cd256883d4ea0f4080826', 
        dataType: 'jsonp',
        success: function (results) {

            humidity2 = results.main.humidity;
        

            myWeatherInterpretation();
}
});
    


    function myWeatherInterpretation() {
        
    $('p2').append('humidity: ' + humidity2);
}
});
