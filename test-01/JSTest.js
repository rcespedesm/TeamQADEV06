/**
 * Created by rodrigocespedes on 2/11/2016.
 */

var JSTest = function(){

};

/**
 * This function return a string with a quantity of prime numbers.
 * @param [int] number  quantity of prime numbers to be displayed.
 * @returns {string} prime numbers in a string.
 */
JSTest.prototype.getPrimeNumbers = function(number){
    /**
     * This function return true if the number parameter is a prime number.
     * @param [int]number
     * @returns {boolean}
     */
    var isPrime = function(number){
        var count = 0;
        for(var i = 1 ; i <= number ; i++){
            if(number % i === 0)
            {
                count++;
            }
        }
        return (count === 2) ? true : false;
    }

    var result = "";
    var counter = 1;
    var index = 2;
    while(counter <= number){
        var flag = isPrime(index);
        if(flag === true){
            result = result + " " + index;
            counter++;
        }
        index++;
    }
    return result;
};

/**
 * this function return the factorial of a number.
 * @param [int]number
 * @returns [int]{number}
 */
JSTest.prototype.getFactorial = function(number){
    var factorial = 1;
    for(var i = number ; i > 0 ; i--){
        factorial = (factorial * i);
    }
    return factorial;
};

/**
 * This function return the quantity of vowels that exist in a paragraph
 * @param [string] paragraph
 * @returns [int]{number}
 */
JSTest.prototype.countVowels = function(paragraph){
    /**
     * This function return true if a parameter is a char
     * @param [char]char
     * @returns {boolean}
     */
    var isVowel = function(char){
        if( char.toLowerCase() === 'a' ||
            char.toLowerCase() === 'e' ||
            char.toLowerCase() === 'i' ||
            char.toLowerCase() === 'o' ||
            char.toLowerCase() === 'u'){
            return true;
        }
        else
        return false;
    }

    var count = 0;
    for(var i = 0 ; i < paragraph.length ; i++){
        if(isVowel(paragraph[i]) === true)
        count++;
    }
    return count;
};

/**
 * This function is to find letter and count it, also return words that contain the letter to find.
 * @param [string]paragraph
 * @param [vowel]letter
 * @returns {string}
 */
JSTest.prototype.evalParagraph = function(paragraph, letter){

    /**
     *This function is to verify if a word contain a letter.
     * @param word
     * @returns {boolean}
     */
    var containLetter = function(word){
        var counter = 0;
        for(var i = 0 ; i < word.length ; i++){
            if(word[i].toLowerCase() === letter.toLowerCase())
            {
                counter++;
            }
        }
        return counter === 0 ? false : true;
    }

    var countWords = 0;
    var wordsResult = "";
    var wordsArray = paragraph.split(" ");
    for(var i = 0 ; i < wordsArray.length ; i++){
        if(containLetter(wordsArray[i]) === true)
        {
            countWords++;
            wordsResult = wordsResult + wordsArray[i] + ", ";
        }
    }

    var resultString =  "Paragraph: '" + paragraph + "'.\n" +
                        "Letter: '" + letter + "'\n" +
                        ">> Count is: " + countWords + "\n" +
                        ">> Words: " + wordsResult;

    return resultString.substr(0,(resultString.length - 2)) ;
};

