/**
 * Created by Administrator on 1/28/2016.
 */


/**
 * this function is to test a regular expresion to verify DATE
 * @param test, this variable has to this format "Y-m-d"
 * @returns {boolean}
 */
var testRegExp = function(test){
    var regularExpresion =  new RegExp("^[1-2][0-9]{3}-([0][0-9]|[1][0-2])-([0-2][0-9]|[3][0-1])$");
    return regularExpresion.test(test)
};


/**
 *this function is to find the first capicua in a range of numbers
 * @param minNumber  lower rank
 * @param maxNumber  higher
 * @returns {*}
 */
var verifyCapicua = function(minNumber, maxNumber){
    for(var i = minNumber ; i <= maxNumber ; i++){
        if(isCapicua(i)){
            break;
        }
    }
    return i;
};

/**
 * This function is to verify if a number is capicua.
 * @param number
 * @returns {boolean}
 */
var isCapicua = function(number){
    var strNumber = number.toString();
    var strcapicua = "";
    for(var i = strNumber.length - 1 ; i >= 0 ; i--){
        strcapicua = strcapicua + strNumber[i];
    }
    return strcapicua === strNumber ? true : false;
};