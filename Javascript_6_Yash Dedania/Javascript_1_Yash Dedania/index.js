var input = document.getElementById('btn');

input.addEventListener('click',function(){
    
    var me = document.getElementById('marks').value;
    var m = parseInt(me)
    
    if(m<=100 && m>=0)
    {
        switch(true){
            case (m<=100 && m>=91):
                var c = 'A'
                document.getElementById('display').innerHTML = 'You received '+c+' grade'
                break;
            case (m<=90 && m>=75):
                    var c = 'B'
                    document.getElementById('display').innerHTML = 'You received '+c+' grade'
                    break;
            case (m<=74 && m>=61):
                var c = 'C'
                document.getElementById('display').innerHTML = 'You received '+c+' grade'
                break;
            case (m<=60 && m>=45):
                var c = 'D'
                document.getElementById('display').innerHTML = 'You received '+c+' grade'
                break;
            case (m<=44 && m>=35):
                    var c = 'E'
                    document.getElementById('display').innerHTML = 'You received '+c+' grade'
                    break;  
            default:
                var c = 'F';
                document.getElementById('display').innerHTML = 'You received '+c+' grade'
            


        }
    }
    else if(m>100)
    {
        alert('Please Enter the Number between 0 to 100')
        return false;
    }
    else{
        alert('Please Enter the number between 0 to 100 ')
        return false
    }

})
   