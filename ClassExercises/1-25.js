/**
 * Created by Administrator on 1/25/2016.
 */

var countWords = function(paragraph){
    var countArray = paragraph.split(" ");
    return countArray.length;
};


var paragraph = "This is a paragraph to do a test";

console.log('the paragraph has : ' + countWords(paragraph) + ' words.');



var getDate = function(){
    var d = new Date();
    var day = [];
    day[0] = "Sunday";
    day[1] = "Monday";
    day[2] = "Tuesday";
    day[3] = "Wednesday";
    day[4] = "Thursday";
    day[5] = "Friday";
    day[6] = "Saturday";
    var hour = 0;
    var minutes = d.getMinutes();
    var seconds = d.getSeconds();

    if(d.getHours() > 12){
        hour = d.getHours() - 12;
        hour = hour + "PM";
    }
    else
    {
        hour = d.getHours();
        hour = hour + "AM";
    }
    console.log("Today is: ", day[d.getDay()]);
    console.log("Current time is : " + hour + " : " + minutes + " : " + seconds);

};