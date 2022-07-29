var x = document.getElementById('ent');
x.addEventListener('click',function(){
    var x1 = document.getElementById('input1').value;
    var x2 = document.getElementById('input2').value;
    var x3 = document.getElementById('input3').value;
    
    if(!x1){
        alert('Please Enter value of Side 1')
        return false;
    }else if(!x2){
        alert('Please Enter value of Side 2 ')
        return false;
    }else if(!x3){
        alert('Please Enter value of Side 3')
        return false;
    }else{
        y = parseInt(x1);
        z = parseInt(x2);
        w = parseInt(x3);
        let s = ((y+z+w)/2);
        
        let inside = s*(s-y)*(s-z)*(s-w);
        
        let area = Math.sqrt(inside);
        var x = document.getElementById('tex').innerHTML = "The area of triangle is "+area;
            document.getElementById('cal').appendChild(x);
        // alert(area);
    }
   
    
})