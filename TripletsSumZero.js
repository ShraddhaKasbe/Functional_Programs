/*/**********************************************************************************
 *  Purpose         : Counts the number of triples that sum to exactly 0. 
 *  @file           : TripletsSumZero.js
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
    @param accepting size of array and array elements from user
*/
function test()
{
    rl.question('Enter the size of your array: ',function(size)
    {
        try
        {
            if(isNaN(size))throw 'not a number'//throws this exception if input is string
            if(size<0)throw 'is not a positive number'//throws this exception if input is negative
            arrayelements(size);
        }
        catch(err)
        {
            console.log(size+" is " +err);
        }
    });
   
}

    function arrayelements(size)
    {
        var arr=[];
        var len=parseInt(size);
        console.log("Enter array elements:");//taking array elements from user
        recurrsion(len);
        function recurrsion(len)
        {
            if(len>0)
            {   
                rl.question('',function(i)
                {
        
                    arr.push(parseInt(i));
                    len--;
                    recurrsion(len);
                    
                });
            }
            else
            {
                rl.close();
                    var sum=0;
                    for(var i=0;i<arr.length-2;i++)//current index of smallest triplet
                    {
                        for(var j=i+1;j<arr.length-1;j++) //index of next smallest number
                        {
                            for(var c=j+1;c<arr.length;i++) //index of largest number
                            {
                                sum=arr[i]+arr[j]+arr[c];//checking the sum of triplets
                                if(sum==0)//if sum==0 prints triplets whose sum=0
                                {
                                    /*prints distinct triplets whose sumequals to zero*/
                                    console.log("Distinct Triplets are:"+arr[i]+","+arr[j]+","+arr[c]);
                                    
                                }
                            }
                        }
                    }
                    
                }
            }
        }
       
test();//calling the function