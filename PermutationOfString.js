
/*/**********************************************************************************
 *  Purpose         : Permutation of strings in recursive and iterative manner
 *  @file           : PermutationOfString.js
 *  @author         : Shraddha Kasbe
 *  @version        : 1.0
 *  @since          : 12-09-2018
 **********************************************************************************/
/*
 *readline module provides an interface for reading data from a Readable stream one line 
*/
var readline = require('readline')

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
/*
    @param accept a string form user and print its permutations
*/
var string=rl.question("Enter a string:",permutation);
function permutation(string)
{
    var str=""; //takes another empty string
    console.log("Permutations of String "+string+" are:");
    getAllPermutations("",string);

    /*Recursive Function to calculate permutations of string */
    function getAllPermutations(str,string)
    {
        var startindex=0;//start index of the sting
        var lastindex=string.length-1; //last index of the string
        if(startindex==string.length) //checks string contains only one character
        {
            console.log(str); //prints character
        }
        for(var i=0;i<string.length;i++) //for loop for permutations
        {
            var firstchar=str+string.charAt(i); //charAt() returns character of ith index
            /*substring to print the characters of specified two indices from the string*/
            var leftchar=string.substring(0,i)+string.substring(i+1);
            getAllPermutations(firstchar,leftchar);//recurrsively calls the function
        }
    }
}