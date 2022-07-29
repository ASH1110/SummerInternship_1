var x = document.getElementById('ent');
x.addEventListener('click',function()
{
    var num = document.getElementById('formGroupExampleInput').value;
    if(!num){
        alert("Please enter the number")
    }else if(num < 0){
        alert("Enter A positive number")
    }else{
        if((num % 4) && (num %100) == 0){
            
            var x = document.getElementById('tex').innerHTML = "It is a Leap Year";
            document.getElementById('cal').appendChild(x);
        }else if((num%400)==0){
            
            var x = document.getElementById('tex').innerHTML = "It is a Leap Year";
            document.getElementById('cal').appendChild(x);
        }else{
        
         var x = document.getElementById('tex').innerHTML = "It is not Leap Year";
            document.getElementById('cal').appendChild(x);
        }
    }
    
})