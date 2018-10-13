/*/**********************************************************************************
 *  Purpose         : Print the prime factors of number N
 *  @file           : Factors.js
 *  @author         : Shraddha Kasbe
 *  @version        : 1.0
 *  @since          : 12-09-2018
 **********************************************************************************/
/*
 *readline module provides an interface for reading data from a Readable stream one line 
*/

var readline=require('readline');
const rl=readline.createInterface({
    input:process.stdin,   //input stream
    output:process.stdout //output stream
});
/*
    @param accept a number from user and calculate prime factors of number 
*/
var num=rl.question("Enter a number:",answer) 
function answer(num)
{
    try
    {
        if(isNaN(num))throw 'Not a number'//throws this exception if input is string
        if(num<0)throw 'Not a positive number'//throws this exception if input is negative
        for(var i=2;i*i<=num;i++)
		{
			while(num%i==0)
			{
                console.log(i);// prints factors
                num=num/i;
            }
        }
    }
   
    catch(err)
    {
        console.log("Input is "+err);//executes when exception thrown by try block
    }		
}