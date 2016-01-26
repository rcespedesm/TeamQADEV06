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
        console.log('SUM is: ', this.getSum(arguments));
        console.log('MAX is: ', this.getMax(arguments));
        console.log('MIN is: ', this.getMin(arguments));
        console.log('AVG is: ', this.getAvg(arguments));
    };

    /**
     * Get the sum of a number list
     * @param index
     * @param list
     * @returns {*}
     */
    this.getSum = function(){

        function _getSum(index, list) {
            if (index > 0) {
                return list[index] + _getSum(index - 1, list);
            }
            else {
                return list[index];
            }
        }

        return (arguments.length === 1) ?
            (arguments[1] === "undefined" ? arguments[0] : _getSum(arguments[0].length - 1, arguments[0])) :
            (arguments.length === 0 ? 0 : _getSum(arguments.length - 1, arguments));
    };

    /**
     * Get value maximum of a number list
     * @param index this represent index to do a cycle.
     * @param list this is the list with all numbers.
     * @param max this store the maximum value to each cycle.
     * @returns {*}
     */
    this.getMax = function(){

        function _getMax(index, list, max) {
            if (index > 0) {
                if (max > list[index - 1])
                    return _getMax(index - 1, list, max);
                else
                    return _getMax(index - 1, list, list[index - 1]);
            }
            else {
                return max;
            }
        }

        return (arguments.length === 1) ?
            (arguments[1] === "undefined" ? arguments[0] : _getMax(arguments[0].length, arguments[0], 0)) :
            (arguments.length === 0 ? 0 : _getMax(arguments.length, arguments, 0));

    };

    this.getMin = function(){

        function _getMin(index, list, min) {
            if (index > 0) {
                if (min < list[index - 1])
                    return _getMin(index - 1, list, min);
                else
                    return _getMin(index - 1, list, list[index - 1]);
            }
            else {
                return min;
            }
        }

        return (arguments.length === 1) ?
            (arguments[1] === "undefined" ? arguments[0] : _getMin(arguments[0].length, arguments[0], 999999)) :
            (arguments.length === 0 ? 0 : _getMin(arguments.length, arguments, 999999));
    };

    this.getAvg = function()
    {
        function _getAvg(qty, arg, index){
            if (index == qty - 1) {
                return arg[index];
            }

            if (index == 0)
                return ((arg[index] + _getAvg(qty, arg, index + 1)) / qty);
            else
                return (arg[index] + _getAvg(qty, arg, index + 1));
        }

        return (arguments.length === 1) ?
            (arguments[1] === "undefined" ? arguments[0] : _getAvg(arguments[0].length, arguments[0], 0)) :
            (arguments.length === 0 ? 0 : _getAvg(arguments.length, arguments, 0));

    };


};