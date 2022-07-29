$('#btn').on('click',function(){
    if($('#first').val()=='' && $('#second').val()=='' && $('#multiply').val()==''){
        alert('Please fill all the input fields')
    }else if((parseInt($('#first').val())==parseInt($('#second').val()))){
        alert('Please Enter valid Input')
    }else{
        var x = parseInt($('#first').val());
        var y = parseInt($('#second').val());
        var m = parseInt($('#multiply').val());
        var z = [];
        for(var i=x;i<=y;i++)
        {
            if(i%m==0)
            {
                z.push(i);
            }
        }
        $('#answer').html("The Number multiply by" +multiply+ "are "+z.join(','));
    }
})