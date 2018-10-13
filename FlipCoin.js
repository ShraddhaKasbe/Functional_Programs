/*/**********************************************************************************
 *  Purpose         : Flip Coin and print percentage of Heads and Tails
 *  @file           : FlipCoin.js
 *  @author         : Shraddha Kasbe
 *  @version        : 1.0
 *  @since          : 12-09-2018
 **********************************************************************************/
/*
 *readline module provides an interface for reading data from a Readable stream one line 
*/

var readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,   //input stream
  output: process.stdout //output stream
});
/*
    @param accept number of times you want to flip the coin and 
    caculate the percentage  of number of heads and tails
   
*/

var no_of_times=rl.question("Enter number of times to flip a coin:",answer);

function answer(no_of_times)
{
    try
    {   
        if(isNaN(no_of_times))throw 'Not a number'     //throws this exception if input is string
        if(no_of_times<0)throw 'Not a positive number' //throws this exception if input is negative
        var head=0;                                    //initially head is zero
        var tail=0;                                    //initailly tail is zero
        for(var i=0;i<no_of_times;i++)
        {
            if(Math.random()<0.5)                      //random() generates random value
            {
                tail++;                                //if random value is less than 0.5,tail increments
            }
            else
            {
                head++;                                //if random value is greater than 0.5,head increments
            }
        }
        console.log("Number of Heads:"+head);          //calculates no of heads
        console.log("Number of Tails:"+tail);          //calculates no of tails
        var head_per=head*100/no_of_times;             //calculates the percentage of heads
        var tail_per=100-head_per;                     // calculates the percentage of tails
        console.log("Heads Percentage:"+head_per);     //prints head's percentage
        console.log("Tails Percentage:"+tail_per);     //prints tail's percentage
    }

    catch(err)
    {
        console.log(no_of_times+" is "+err);            //executes when exception thrown by try block
    }
}