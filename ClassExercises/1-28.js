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
 *
 * @param minNumber
 * @param maxNumber
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

var isCapicua = function(number){
    var strNumber = number.toString();
    var strcapicua = "";
    for(var i = strNumber.length - 1 ; i >= 0 ; i--){
        strcapicua = strcapicua + strNumber[i];
    }
    return strcapicua === strNumber ? true : false;
};