/*/**********************************************************************************
 *  Purpose         : Print the year is a Leap Year or not.
 *  @file           : LeapYear.js
 *  @author         : Shraddha Kasbe
 *  @version        : 1.0
 *  @since          : 12-09-2018
 **********************************************************************************/
/*
 *readline module provides an interface for reading data from a Readable stream one line 
*/

var readline = require('readline')

const rl=readline.createInterface({
    input:process.stdin,  //input stream
    output:process.stdout //outpur stream
});
/*
    @param accept an input year from user and check whether it is leap year or not
*/
var year=rl.question("Enter a year:",answer);
function answer(year)
{
    /*try catch block for exception handling*/
    try 
    {
        if(isNaN(year))throw 'Not a number'     //throws this exception if input is string
        if(year<0)throw 'Not a positive number' //throws this exception if input is negative


        if(year>999 && year<=9999) //ensures that entered year is of 4 digit
        {
        /*
            LEAP YEAR CONDITIONS
            --year should be divisible by 4  
            --year sould not be a century i.e., not divisible by 1000
            --year shild be divsible by 400 
        */
            if((year%4==0) && (year%100!=0) || (year%400==0)) 
            {
                console.log("Year "+year+" is a leap year");
            }
            else
            {
                console.log("Year "+year+" is not a leap year");
            }
        }
        else
        {
            console.log("Invalid Year");//prints if year is not of 4 digit
        }
    }
    catch(err)
    {
        console.log(year+" is "+err);            //executes when exception thrown by try block
    }
}