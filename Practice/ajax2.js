$.ajax({
    url:'https://dog.ceo/api/breeds/image/random',
    method:'get',
    success: getImage
})
function getImage(data){
    // $('<img>',{
    //     src: data.message
 // }).appendTo(".imageContainer");
   $(document.createElement('img')).attr('src',data.message).appendTo(".imageContainer")

}