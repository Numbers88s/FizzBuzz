// //variable to run FizzBuzz variable

$(document).ready(function(){

function addItem(){
    $('#add-number').keydown(function(enter){
        if(enter.keyCode == 13) {
            fizzBuzz();
        }
    });
}

addItem();

function fizzBuzz(){
    var number = $('#add-number').val();

    if(number % 3 === 0 && number % 5 === 0) {
        $("body").append($("<p>FizzBuzz</p>"));
    } else if(number % 3 === 0) {
        $("body").append($("<p>Fizz</p>"));
    } else if(number % 5 === 0) {
        $("body").append($("<p>Buzz</p>"));
    } else {
        $("body").append($("<p>" + number + "</p>"));
    }
    $('#add-number').val('');
}

});
