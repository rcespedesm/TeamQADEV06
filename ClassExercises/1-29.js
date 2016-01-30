/**
 * Created by Administrator on 1/29/2016.
 */

/**
 * This function is to get a factorial of a number.
 * @param (integer)number
 * @returns {number}
 */
var getFactorial = function(number){
    if(arguments.length === 1){
        if(number >= 0){
            var factorial = 1;
            for(var i = 1 ; i <= number ; i++){
                factorial = factorial * i;
            }
            return factorial;
        }
        else{
            throw "do not exist factorial of negative numbers";
        }
    }
    else{
        throw "Insert only a one parameter";
    }

};

/**
 * This function is to truncate a paragraph to a variable size
 * @param (string) paragraph
 * @param (integer) size
 * @returns {string}
 */
var truncateWord = function(paragraph, size){
    var newParagraph = "";
    for(var i = 0 ; i < size ; i++){
        newParagraph = newParagraph + paragraph[i];
    }
    return newParagraph;
};