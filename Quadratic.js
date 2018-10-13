/*/**********************************************************************************
 *  Purpose         : find the roots of the quadratic equation a*x*x + b*x + c
 *  @file           : Quadractic.js
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
    output:process.stdout  //output stream
});

/*
    @param accept value of A from user
    @param accept value of B from user
    @param accept value of C from user
*/
var a=rl.question("Enter value A:",firstvalue);
function firstvalue(a)
{
    /*try catch block for exception handling*/
    try 
    {
        if(isNaN(a))throw 'Not a number'     //throws this exception if input is string

        var b=rl.question("Enter value B:",secondvalue);
        function secondvalue(b)
        {
            if(isNaN(b))throw 'Not a number'     //throws this exception if input is string
  
            var c=rl.question("Enter value C:",thirdvalue);     
            function thirdvalue(c)
            {
                if(isNaN(b))throw 'Not a number'     //throws this exception if input is string

                var delta=Math.pow(b,2)-4*a*c;            //calculates delta value
                var root1=(-b+Math.sqrt(delta))/(2*a);    //calculates root1 value
                var root2=(-b-Math.sqrt(delta))/(2*a);    //calculates root2 value

                console.log("Roots for the equation" +a+ "x^2 +" +b+"x +" +c);
                if(delta>0) //if delta > 0 then there are two real roots
                {
                    console.log("There are two real roots");
                    console.log("First Root:"+root1);
                    console.log("Second Root:"+root2);
                } 
                else if(delta==0) //if delta==0 then there is only one real root
                {
                    console.log("There is one real root");
                    console.log("Root:"+root1);
                }
                else  //if delta<0 then there are no real roots
                {
                    console.log("There are no real roots");
                }       
            }
        }
    }
    catch(err)
    {
        console.log("Input is "+err);          //executes when exception thrown by try block
    }
}