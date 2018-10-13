/*/**********************************************************************************
 *  Purpose         : Simulates a gambler and Print Number of Wins and Percentage of Win and Loss.
 *  @file           : Gambler.js
 *  @author         : Shraddha Kasbe
 *  @version        : 1.0
 *  @since          : 12-09-2018
 **********************************************************************************/
/*
 *readline module provides an interface for reading data from a Readable stream one line 
*/

var readline=require('readline');
var util=require('util'); //util is used to print the ouput in same line
const rl=readline.createInterface({
    input:process.stdin,  //input stream
    output:process.stdout //output stream
});
/*
    @param accept number of time to play
    @param accept available stake 
    @param accept target to reach the goal
*/
var num=rl.question("Enter a number of times to play:",answer);
function answer(num)
{
    /*try catch block for exception handling*/
    try 
    {
        if(isNaN(num))throw 'Not a number'     //throws this exception if input is string
        if(num<0)throw 'Not a positive number' //throws this exception if input is negative

        var stake=rl.question("Enter available stake:",calculatestake);
        function calculatestake(stake)
        {
            if(isNaN(stake))throw 'Not a number'     //throws this exception if input is string
            if(stake<0)throw 'Not a positive number' //throws this exception if input is negative
        
            var goal=rl.question("Enter goal to reach:",calculatesgoal);
            function calculatesgoal(goal)
            {  
                if(isNaN(goal))throw 'Not a number'     //throws this exception if input is string
                if(goal<0)throw 'Not a positive number' //throws this exception if input is negative
                
                var wins=0;  //initially wins is zero
                for(var i=0;i<num;i++)
                { 
                    var cash=stake;
                    while(cash>0 && cash<goal)
		            {
			            if(Math.random()<0.5) //generates randome value
			            {
				            cash++;           //if random value < 0.5, cash(stake) increments
			            }
			            else
			            {
				            cash--;           //if random value > 0.5, cash(stake) decreaments
                        }
                    
                    }
			        if(cash==goal) //if cash==goal you win
			        {
				        wins++;    // wins increaments
                    }
                }
                console.log("Number of wins:"+wins);//prints number of wins

                var win_per=(wins*100)/num; //calculates wins percentage
                var loss_per=100-win_per;   //calculates loss percentage
            
                console.log("Percentage of wins:"+win_per);//prints wins percentage
                console.log("Percentage of loss:"+loss_per);//prints loss percentage
            }	
        }
    }
    catch(err)
    {
        console.log(num+" is "+err);            //executes when exception thrown by try block
    }
        
}
