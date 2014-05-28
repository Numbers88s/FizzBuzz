//variable to run FizzBuzz variable

var FizzBuzz = function(){
    for (var i = 1; i < 101; i++) {
        if( i % 3 === 0 && i % 5 === 0 ) {
            $("body").append($("<p>FizzBuzz</p>"));
        } if( i % 3 === 0) {
            $("body").append($("<p>Fizz</p>"));
        } if( i % 5 === 0) {
            $("body").append($("<p>Buzz</p>"));
        } else {
            $("body").append($("<p>" + i + "</p>"));
        }
    }
};



$(document).ready(function(){
    $('input').on('click', FizzBuzz);
});