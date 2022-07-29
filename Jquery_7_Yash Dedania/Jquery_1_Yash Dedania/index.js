$('#btn').on('click',function(){
        if($('#date_input').val()==""){
                {
                        alert('Please enter the Date')
                } 
        }else{
                var date = new Date($('#date_input').val());
                var day = date.getDate();
                var month = date.getMonth()+1;
                var year = date.getFullYear();
                var today = new Date(); 
                var Difference_time = Math.abs(date.getTime()-today.getTime());
                var Difference_days = Math.abs(Difference_time/(1000*3600*24))
        
                $('#answer').html("Total Days are "+Math.trunc(Difference_days))
        }
        
        
        
    
   
    

})