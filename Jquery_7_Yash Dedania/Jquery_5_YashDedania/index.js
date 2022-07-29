$('#btn').on('click',function(){
    if($('#first').val()==''){
        alert('Please fill all the input fields')
    }else if($('#second').val()==''){
        alert('Please enter the input')
    }else if(parseInt($('#first').val())==parseInt($('#second').val())){
        alert('Please enter the valid input')
    }
    else{
        var x = parseInt($('#first').val());
        var y = parseInt($('#second').val());
        var sum=0;
        for(var i =x;i<=y;i++){
            sum += Math.pow(i,i);
        }
        $('#answer').html("The Sum of all number each power raised   "+sum);
    }
})