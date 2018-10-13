/*/**********************************************************************************
 *  Purpose         : Calculate the windchill
 *  @file           : WindChill.js
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
	@param accept temperature and speed of the wind
*/
var t=rl.question("Enter Temperature:",temperature);
function temperature(t)
{
	try
	{
		if(isNaN(t))throw 'Temperature cannot be string'//throws this exception if input is string
	
		   var v=rl.question("Enter speed of the wind:",windSpeed);
    		function windSpeed(v)
    		{
				if(isNaN(v))throw 'Speed cannot be string'//throws this exception if input is string
        		if(t<50 && v<120 && v>3)
				{
					/*calculate the windchill*/
		    		var w=Math.abs(35.74+0.6215+(0.4275*t-35.75)*(Math.pow(v, 0.16)));
		    		console.log("Temperature is:"+t);//prints temperature
		    		console.log("Speed of the wind is:"+v);//prints speed
		    		console.log("The effective temperature of windchill is:"+w);//prints windchill temperature
				}
				else
				{
					console.log("Invalid value entered");//prints invalid if entered value is out of range
				}
    		}
		
	}
	catch(err)
	{
		console.log(err);//executes when exception thrown by try block
	}
}
