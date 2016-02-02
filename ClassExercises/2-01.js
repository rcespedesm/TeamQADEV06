/**
 * Created by Administrator on 2/1/2016.
 */

var globalName = "Pepito";

/**
 *This function is to display a message on console.
 * @param {Function} callBack, any function to execute.
 */
var sayHello = function(name, callBack){

    if(typeof (arguments[0]) === "string")
    {
        console.log('Hello World ', name);
        callBack(name);
    }
    else
    {
        callBack = name;
        console.log('Hello World ', "World");
        callBack("World");
    }
};


sayHello(globalName, function(name){
    console.log('How Are You? ', name);
});


sayHello(function(name){
    console.log('How Are You? ', name);
});



var number1 = 5;
var number2 = 7;


/**
 * This is a auto-executable function. that receive 2 parameters.
 */
(function(a, b){
    var res = a + b;
    console.log('The result is ', res);
})(number1, number2);

