/*/**********************************************************************************
 *  Purpose         : Replace String Template “Hello <<UserName>>, How are you?” 
 *  @file           : ReplaceString.js
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
  output: process.stdout  //output stream
});

/*
    @param accept string from user and replace it with username 
*/
var username=rl.question("Enter an Username:",answer);
function answer(username)
{
    try
    {
        if(!isNaN(username))throw 'not a String, Enter Alphabets only'//throws this exception if input is number
        if(username.length>2)//ensures string atleast contains 3 characters
        {
            var msg="Hello <<Username>> , How are you?";
            console.log("Original Message:"+msg);
            /*replace method replaces the string*/
            console.log("Message after Replacement:"+msg.replace(/<<Username>>/i,username));
        }
        else
        {
            /*prints invalid if string is less than 3 characters*/
            console.log("Inavlid Username! Ensure Username must contain atleast 3 characters");
        }
    }
    catch(err)
    {
        console.error(username+" is "+err);
    }
}