$('#btn').on('click',function(){
    if(!parseInt($('#sides').val())){
        alert('Please Enter the Sides')
        return false;
    }else if(parseInt($('#sides').val())<=0){
        alert('Please Enter value greater than 0')
        return false;
    }else{
        var x = parseInt($('#sides').val());
        var sum = parseFloat((x-2)*180);
        var single = parseFloat(sum/x);
        $('#answer').html("Total sum of angles of Polygon is "+sum)
        $('#answer2').html("The degree of single angle is "+single)
    }
})