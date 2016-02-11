/**
 * Created by rodrigocespedes on 2/11/2016.
 */


(
 function(){
     var test = new JSTest();
     var qtyPrimeNumber = prompt("Insert a Number to print the first N ‘prime’ numbers");
     console.log("The firsts " + qtyPrimeNumber + " 'prime' numbers are:", test.getPrimeNumbers(qtyPrimeNumber));
     var factorialNumber = prompt("Insert a Number to calculate the factorial of a number");
     console.log("The Factorial of " + factorialNumber + " is: ", test.getFactorial(factorialNumber));
     var paragraphToCountVowels = prompt("Insert a paragraph to count vowels");
     console.log("In this paragraph '" + paragraphToCountVowels + "' exist : ", test.countVowels(paragraphToCountVowels), " Vowels.");
     var paragraphToEval = prompt("Insert a paragraph to find a letter");
     var vowelToCount = prompt("Insert a letter that you want to count");
     console.log(test.evalParagraph(paragraphToEval, vowelToCount));
 }
)();