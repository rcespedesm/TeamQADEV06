/**
 * Created by Administrator on 1/19/2016.
 */

/**
 * This class contain many functions to do math operations.
 * @constructor
 */
var Calculator = function(){

    /**
     * doOperations is a function that call 4 math functions.
     */
    this.doOperations = function(){
        console.log('SUM is: ', this.getSum(arguments.length - 1, arguments));
        console.log('MAX is: ', this.getMax(arguments.length, arguments, 0));
        console.log('MIN is: ', this.getMin(arguments.length, arguments, 999999));
        console.log('AVG is: ', this.getAvg(arguments.length, arguments, 0));
    };

    /**
     * Get the sum of a number list
     * @param index
     * @param list
     * @returns {*}
     */
    this.getSum = function(index, list){

        if(index >= 0){
            return list[index] + this.getSum(index - 1, list);
        }
        else{
            return 0;
        }
    };

    /**
     * Get value maximum of a number list
     * @param index this represent index to do a cycle.
     * @param list this is the list with all numbers.
     * @param max this store the maximum value to each cycle.
     * @returns {*}
     */
    this.getMax = function(index, list, max){
        if(index > 0){
            if(max > list[index - 1])
                return this.getMax(index - 1, list, max);
            else
                return this.getMax(index - 1, list, list[index - 1]);
        }
        else{
            return max;
        }
    };

    this.getMin = function(index, list, min){
        if(index > 0){
            if(min < list[index - 1])
                return this.getMin(index - 1, list, min);
            else
                return this.getMin(index - 1, list, list[index - 1]);
        }
        else{
            return min;
        }
    };

    this.getAvg = function(qty, arg, index)
    {
        if (index == qty - 1) {
            return arg[index];
        }

        if (index == 0)
            return ((arg[index] + this.getAvg(qty, arg, index + 1)) / qty);
        else
            return (arg[index] + this.getAvg(qty, arg, index + 1));
    };


};