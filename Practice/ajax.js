function getImage(){
   var Res = new XMLHttpRequest();
   Res.open('get','https://dog.ceo/api/breeds/image/random',true);
   Res.send(); 
   Res.onload = function(){
    console.log(Res.response);
    var responseIma = JSON.parse(Res.response);
   var urlimage =  responseIma.message;
   $('#imageget').attr('src',urlimage);
   $('#imageget').css({
    "width":"200px",
    "height":"200px"
   })
   }
   Res.onerror = function(){
    console.log("Error")
   }

// $.ajax({
//     url:'https://dog.ceo/api/breeds/image/random',
//     method:'get',
//     success:function(data){
//      var url = data.message;
//      $('#imageget').attr('src',url);
//     $('#imageget').css({
//     "width":"200px",
//     "height":"200px"
//     })
// } });

// $.get('https://dog.ceo/api/breeds/image/random',function(data){
//     var url = data.message;
//     $('#imageget').attr('src',url);
//     $('#imageget').css({
//         "width":"200px",
//         "height":"200px"
//     })
// }).fail(function(){
//     console.log("Error is Recieved")
// })
}
$('#btn').click(getImage);
