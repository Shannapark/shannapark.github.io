alert("Welcome! Please view console on your broswer");


var Name = "shanna park";
console.log(Name);

var Age = 19;
console.log(Age);

var Birthday = "06/04/1999";
console.log(Birthday);

var admin = false;
console.log(admin);

var myself = Name + Age;
console.log(myself);


console.log(29 - 10);
console.log(10 + 9);
console.log(13 + 6);
console.log(19 * 0);
console.log(19 / 1);



var countries = ["italy", "germany", "hong kong", "seoul"]
console.log(countries[0]);
console.log(countries.length);


var currentTime = "The current time is ";
var time =  new Date().getHours() + ":" + new Date().getMinutes() + ".";

console.log(currentTime + time);


var currentHour = new Date().getHours();

if (currentHour == 12) {
  console.log("It is 12 now.")
} else {
  console.log("It is not 12 yet.")
};


console.log (name.length);
Name = Name.length - 2;


if (name.length - 2 <= 9)  {
  var msg = "My name is relatively short."
} else if (name.length - 2 >= 14) {
  var msg = "My name is relatively long."
} else {
  var msg = "My name is neither short nor long."
}



var nyTemp = 53;
var italyTemp = 59;

var convert = function(num) {
  return (num - 32) * (5/9);
}

console.log("The temperature in New York City is " + (convert(currentTemp)) + "°C at " + d)
console.log("The temperature in Italy is " + (convert(italyTemp)) + "°C at " + d)




for(var i = 1; i <= 40; i++) {

      for(var j = 1; j<= i; j++) {

        document.write("Shanna park");  

      }

      document.write("<br/>");
}



