/**
 * Created by rodrigocespedes on 3/3/2016.
 */



var Calculator = function(){
    this.buttons = ["0", "1", "2", "3","4","5","6","7","8","9","+","-","/","*","=","C"];
    this.firstDigit = "HOLA";
    this.secondDigit = "";
    this.operator = "";
    var events = new Events(this);

    this.draw = function(){
        var box = $('<div id="calculator"></div>');
        var input = $('<input type="number" id="displayBox">');
        var buttonBox = $('<div id="buttonBox"></div>');
        var button = "";
        for(var i = 0 ; i < this.buttons.length ; i++){
            button = $('<div id="buttons">' + this.buttons[i] + '</div>');
            buttonBox.append(button);
        }
        box.append(input);
        box.append(buttonBox);
        $('body').append(box);

        $('div#buttons').on("click", this.eventButton);
    };



};

var Events = function(calc){

    this.calculator = calc;


    this.eventButton = function(e){
        if(parseInt(e.target.innerText) < 10)
        {
            $('#displayBox').val($('#displayBox').val() + e.target.innerText);
        }
        else{
            alert(this.calculator.firstDigit);

        }
    };
};



