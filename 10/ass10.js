function focusevent(){
    document.getElementById("num").style.background="aqua";
}


function factorial(){
    var i, num, f;  
        f = 1;  
        num = document.getElementById("num").value;  
        for(i = 1; i <= num; i++)    
        {  
            f = f * i;  
        }  
        document.getElementById("p1").innerHTML = "The factorial of the number is: " + f ;  
}

function prime() {
    
    var n,i, flag = true;

    n= document.getElementById("num").value;

    n = parseInt(n)
    for(i = 2; i <= n - 1; i++)
        if (n % i == 0) {
            flag = false;
            break;
        }
         
        
    if (flag == true)
        document.getElementById("p1").innerHTML= n + " is prime";
    else
    document.getElementById("p1").innerHTML= n + " is not prime";   
    }

function fib(){
    var n1 = 0,  n2 = 1, next_num, i;  
    var num= document.getElementById("num").value;

    num = parseInt(num)
      
      
    for ( i = 1; i <= num; i++)  
    {  
        document.getElementById("p1").innerHTML= " <br> " +  n1 ; 
        next_num = n1 + n2; 
      
        n1 = n2;   
        n2 = next_num;  
    }  
}    