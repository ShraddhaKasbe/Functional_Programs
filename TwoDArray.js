/*/**********************************************************************************
 *  Purpose         : Reading in 2D arrays of integers, doubles, or booleans 
 *  @file           : TwoDArray.js
 *  @author         : Shraddha Kasbe
 *  @version        : 1.0
 *  @since          : 12-09-2018
 **********************************************************************************/
/*
 *readline module provides an interface for reading data from a Readable stream one line 
*/
var util=require('util');//used to print the output in single line
try
{
/*Created 2D array with rows=3 and column=3*/
console.log("Integer 2D Array")
var Integer_arr=new Array(3);
for(var i=0;i<3;i++)
{
    Integer_arr[i]=new Array(3);
}

/*2D Array for integer*/
var start=1;
for(var i=0;i<3;i++)//for loop for rows of integer
{
    for(var j=0;j<3;j++)//for loop for columns of integer
    {
        Integer_arr[i][j]=start;//storing integer values in array
        start=start+1; //incrementing value
    }
}
for(var i=0;i<3;i++)
{
    for(var j=0;j<3;j++)
    {
        util.print(Integer_arr[i][j]+ "  ");//printing integer 2D array
    }
    console.log();
}


/*2D Array for double values*/
console.log();
console.log("Double 2D Array");
var Double_arr=new Array(3);
for(var i=0;i<3;i++)
{
    Double_arr[i]=new Array(3);
}
var double=2.4;
for(var i=0;i<3;i++)//for loop for rows of double
{
    for(var j=0;j<3;j++)//for loop for columns of double
    {
        Double_arr[i][j]=double;//storing double values in array
        double=double+3;
    }
}
for(var i=0;i<3;i++)
{
    for(var j=0;j<3;j++)
    {
        util.print(Double_arr[i][j]+ "  ");//printing double 2D Array
    }
    console.log();
}

/*2D Array for Boolean value*/
console.log();
console.log("Boolean 2D Array")
var Boolean_arr=new Array(3);
for(var i=0;i<3;i++)
{
    Boolean_arr[i]=new Array(3);
}
var boolean;
for(var i=0;i<3;i++)//for loop for rows of boolean
{
    for(var j=0;j<3;j++)//for loop for columns of boolean
    { 
        if(i==j)
        {
            Boolean_arr[i][j]=true;//prints true value where i=j,i.e., diagonally
        }
        else
        {
            Boolean_arr[i][j]=false;//prints false value where i!=j
        }
    }
}
for(var i=0;i<3;i++)
{
    for(var j=0;j<3;j++)
    {
        util.print(Boolean_arr[i][j]+ "  ");//prints boolean value into 2D Array
    }
    console.log();
}

}
catch(err)
{
    console.log(err);
}