$('#btn').on('click',function(){
    
    if(!parseInt($('#first').val()) && !parseInt($('#second').val())){
        alert('Please Enter Both the input')
        return false;
    }else if(parseInt($('#first').val())<=0 || parseInt($('#second').val())<=0 ){
        alert('Please Enter valid number that is greater than 0')
        return false;
    }else{
         
        var x1 = parseInt($('#first').val())
        var x2 = parseInt($('#second').val())
        
        if(x1<=0 || x2<=0){
            alert('Invalid Length of Triangle Side')
        }
             var max_len = x1+x2-1;
             var min_len = Math.max(x1,x2)-Math.min(x1,x2)+1;

                    
       
        $('#answer').html("The Maximum possible length of third Side is  "+max_len)
                 $('#answer1').html("The Minimum possible length of third Side is  "+min_len)
             
             

        
    }
})