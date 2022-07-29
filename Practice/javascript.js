$('#first').css({
   "color":"red",
   "background-color":"blue"
});

$('.second').css({
    "background-color":"pink",
    "font-size":"30px"
})

$('.div1').css({
    "width":"100px",
    "height":"100px",
    "background-color":"red"
})
// $('.div1').click(function()
// {
//     alert("Div is Clicked")
// })

$('.div1').on('click',function(){
    var element = $(this);
    element.width("300px")
})