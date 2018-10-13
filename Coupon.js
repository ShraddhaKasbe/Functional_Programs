/***********************************************************************************
 *  Purpose         : To generate distinct coupon number
 *  @file           : Coupon.js
 *  @author         : Shraddha Kasbe
 *  @version        : 1.0
 *  @since          : 12-09-2018
 **********************************************************************************/
/*
 *readline module provides an interface for reading data from a Readable stream one line 
*/
 var readline=require('readline');
 const rl=readline.createInterface({
    input:process.stdin,     //input stream
    output:process.stdout    //output stream                               
});
/*
 * @param accept number from user and generate distinct coupon number using random()
*/
var code='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';// to generate combination of alphabets and numbers
var couponcode=code.split('');//split method used to convert the code string into array
var num=rl.question("Enter a number of elements of a coupon:",coupon);//taking the range of coupon number from user
function coupon(num) 
{
    /*try catch block for exception handling*/
    try
    {
        if(isNaN(num))throw 'Not a number'//throws this exception if input is string
        if(num<0)throw 'Not a positive number'//throws this exception if input is neagtive number
        var arr=new Array(num);//creating an array to store random values
        for(var i=0;i<num;i++)
        {
            arr[i]=new Array(num);
        }
        for(var i=0;i<arr.length;i++)
        {
            var r=couponcode[Math.floor(Math.random()*couponcode.length)]; //generates random number
            arr[i]=r;
            for(var j=0;j<i;j++)
            {
                if(arr[i]==arr[j])//checks for the duplication of number
                {
                    i--;
                    break;
                }
            }
        }
       

        console.log("Unique elements in distinct coupon number are:");//prints unique elements
        for(var i=0;i<num;i++)
        {
            console.log(arr[i]);
        }
        
    }
    catch(err)
    {
        console.log("Input is "+err);//executes when exception thrown by try block
    }
}



