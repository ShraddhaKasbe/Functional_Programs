/*/*****************************************************************************************
 *  Purpose         : prints a table of the powers of 2 that are less than or equal to 2^N.
 *  @file           : PowerOfTwo.js
 *  @author         : Shraddha Kasbe
 *  @version        : 1.0
 *  @since          : 12-09-2018
 *********************************************************************************************/
/*
 *readline module provides an interface for reading data from a Readable stream one line 
*/

var readline=require('readline');

const rl=readline.createInterface({
    input:process.stdin,   //input stream
    output:process.stdout  //output stream
});

/*  
    @param accept limit of power till user wants the table of two
*/
var powerLimit=rl.question("Enter power limit:",answer)
function answer(powerLimit)
{
    /*try catch block for exception handling*/
    try 
    {
        if(isNaN(powerLimit))throw 'Not a number'     //throws this exception if input is string
        if(powerLimit<0)throw 'Not a positive number' //throws this exception if input is negative

        var power=1;                                  //initailly power is assigned as 1
        console.log("Power of 2 that are less than "+powerLimit+" :");
        for(var i=0;i<powerLimit;i++)
        {    
            console.log("2 ^ "+i+" = "+power);  
            power=power*2;
        }
    }
    catch(err)
    {
        console.log(powerLimit+" is "+err);            //executes when exception thrown by try block
    }
}