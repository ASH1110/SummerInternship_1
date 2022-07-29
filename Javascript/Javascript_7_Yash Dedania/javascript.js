var x = document.getElementById('ent');
x.addEventListener('click',function(){
    var x1 = document.getElementById('input1').value;
    var x2 = document.getElementById('input2').value;
    var x3 = document.getElementById('input3').value;
    if(!x1){
        alert('Please Enter value of starting number')
        return false;
    }else if(!x2){
        alert('Please Enter value of ending number ')
        return false;
    }else if(!x3){
        alert('Please Enter value of Power')
        return false;
    }else{
        y = parseInt(x1);
        z = parseInt(x2);
        w = parseInt(x3);
        var sum = 0;
        for(var i=y;i<=z;i++)
        {
            sum = sum + Math.pow(i,w);
    
        }
        var x = document.getElementById('tex').innerHTML = "Answer is "+sum;
            document.getElementById('cal').appendChild(x);


        
    }
  

    
})