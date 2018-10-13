/*/**********************************************************************************
 *  Purpose         : Prints the Nth harmonic number: 1/1 + 1/2 + ... + 1/N 
 *  @file           : HarmonicSeries.js
 *  @author         : Shraddha Kasbe
 *  @version        : 1.0
 *  @since          : 12-09-2018
 **********************************************************************************/
/*
 *readline module provides an interface for reading data from a Readable stream one line 
*/

var readline=require('readline');
const rl=readline.createInterface({
    input:process.stdin,  //input stream
    output:process.stdout //output stream
});
/*
    @param accept number from user till you want the harmonic series
*/
var num=rl.question("Enter a number:",answer);
function answer(num)
{
    /*try catch block for exception handling*/
    try 
    {
        if(isNaN(num))throw 'Not a number'     //throws this exception if input is string
        if(num<0)throw 'Not a positive number' //throws this exception if input is negative

        var sum=0;
        console.log("Harmonic Number series are:");//prints harmonic series
        for(var i=1;i<=num;i++)
        {
            sum=sum+(1/i);
            if(i==1)
            {  
                console.log("1 + ")         
            }
            else if(i==num)
            {
                console.log("1/"+i);
            }
            else
            {
                console.log("1/"+i+" + ");
            }
        }
                /*prints the sum of harmonic series */
            console.log("The Sum of the Harmonic number series is:"+sum);
    }
    catch(err)
    {
        console.log(num+" is "+err);            //executes when exception thrown by try block
    }
}