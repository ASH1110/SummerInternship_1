$('#btn').on('click',function(){
    if($('#first').val()==''){
        alert('Please fill all the input fields')
    }else if($('#second').val()==''){
        alert('Please enter the input')
    }else{
        var x = parseFloat($('#first').val());
        var y = parseFloat($('#second').val());
        dist = x*1000;
        time = y*60;
        var speed = dist / time;
        $('#answer').html("The Speed of the Vehice is "+speed);
    }
})