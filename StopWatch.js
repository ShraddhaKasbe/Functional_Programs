/*/**********************************************************************************
 *  Purpose         : Stopwatch for measuring the time that elapses 
 *                    between the start and end clicks
 *  @file           : StopWatch.js
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
    @param taking input from user to start and stop the stopwatch
*/


    var input=rl.question('Press S to start stopwatch ',start_stopwatch);
    function start_stopwatch(input)
    {
        try
        {
            if(input!='S')throw 'Wrong key pressed'//throw exception if incorrect key pressed

            if(input=='S') //checking whether user pressed the right key to start stopwatch
            {
                var start=new Date().getSeconds();              //gets start time in seconds
                console.log("Start Time: "+start+" seconds");   //prints start time
                console.log();

                var input2=rl.question('Press X to stop stopwatch ',stop_stopwatch)
                function stop_stopwatch(input2)
                {
                    if(input2!='X')throw 'Wrong key pressed'//throw exception if incorrect key pressed

                    if(input2=='X') //checking whether user pressed the right key to stop stopwatch
                    {
                    
                        var stop=new Date().getSeconds();               //gets stop time in seconds
                        console.log("Stop Time: "+stop+" seconds");     //prints stop time
                        console.log();
                        var elapsed_time=stop-start;                    //calculates elapsed time
                        console.log("Elapsed Time: "+elapsed_time);     //prints elapsed time 
                    }
                }
            
            }
        }
        catch(err)
        {
            console.log(err);
        }
       
    }

