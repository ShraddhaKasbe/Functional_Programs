/*/**********************************************************************************
 *  Purpose         : Calculating distance between two points
 *  @file           : Distance.js
 *  @author         : Shraddha Kasbe
 *  @version        : 1.0
 *  @since          : 12-09-2018
 **********************************************************************************/
/*
 *readline module provides an interface for reading data from a Readable stream one line 
*/
var readline=require('readline');

const rl=readline.createInterface({
    input:process.stdin,    //input stream
    output:process.stdout  //output stream
});
/*
    @param accept from the user values x1,x2,y1,y2 and calculate distanve between points
*/
var x1=rl.question("Enter First point x1 value:",pointx1);
function pointx1(x1)
{
    try
    {
        if(isNaN(x1))throw 'Not a number'//throws this exception if input is string
        var x2=rl.question("Enter First point x2 value:",pointx2);
        function pointx2(x2)
        {
            if(isNaN(x2))throw 'Not a number'//throws this exception if input is string
            
            var y1=rl.question("Enter second point y1 value:",pointy1);
            function pointy1(y1)
            {
                if(isNaN(y1))throw 'Not a number'//throws this exception if input is string
                
                var y2=rl.question("Enter second point y2 value:",pointy2);
                function pointy2(y2)
                {
                    if(isNaN(y2))throw 'Not a number'//throws this exception if input is string
                    
                    var distance=Math.sqrt(((x2-x1)*(x2-x1))+((y2-y1)*(y2-y1)));//calculating distance
                
                    /*prints the distance*/
                    console.log("Distance Between two points (x1,y1) and (x2,y2) is:"+distance);
                }
            }
        }
    }
    catch(err)
    {
        console.log("Input is "+err); //executes when exception thrown by try block
    }
}