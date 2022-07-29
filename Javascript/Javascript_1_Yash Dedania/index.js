var demo = document.getElementById('ent');
demo.addEventListener('click',function(){
var x = document.getElementById('formGroupExampleInput').value;
var convert = parseInt(x);
if(!x){
    alert("Please Enter a Number")
}else if(x<0){
    alert("Please Enter a Positive Number")
}else if(x==1 || x==0){
     alert("It is neither a Prime nor Composite Number")
}else{
        for(var i=2;i<convert;i++)
    {
        if(convert%i==0)
        {
            var x = document.getElementById('tex').innerHTML = "It is not a Prime Number";
            document.getElementById('cal').appendChild(x);
            break;
        }
    
    }
    if(i == convert){
        
        var x = document.getElementById('tex').innerHTML = "It is  a Prime Number";
            document.getElementById('cal').appendChild(x);
        
    }
    }
    
    
})



