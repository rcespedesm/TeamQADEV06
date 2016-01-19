/**
 * Created by Administrator on 1/19/2016.
 */


var doOperations = function(){
    console.log('SUM is: ', getSum(arguments.length - 1, arguments));
    console.log('MAX is: ', getMax(arguments.length, arguments, 0));
    console.log('MIN is: ', getMin(arguments.length, arguments, 999999));
};

var getSum = function(index, list){

    if(index >= 0){
        return list[index] + getSum(index - 1, list);
    }
    else{
        return 0;
    }
};

var getMax = function(index, list, max){
    if(index > 0){
        if(max > list[index - 1])
            return getMax(index - 1, list, max);
        else
            return getMax(index - 1, list, list[index - 1]);
    }
    else{
        return max;
    }
};

var getMin = function(index, list, min){
    if(index > 0){
        if(min < list[index - 1])
            return getMin(index - 1, list, min);
        else
            return getMin(index - 1, list, list[index - 1]);
    }
    else{
        return min;
    }
};


