var arr = new Array();

arr[0] = 1;
arr[1] = 2;
arr[2]= 3;
arr[3]= 4;

var funcExp = function addOne(number)
 { console.log(arr[1]+1);}
  
 function oddOrEven(b,number) 
 {
    if
    (b%2 == 0) 
    {
     number(b);
    }
      
    else 
    {
        console.log("the number is odd");
    }
 }    

 for (f in arr)
 {
    oddOrEven(arr[f], funcExp);
 }
