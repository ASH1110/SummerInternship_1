$('.inner').hover(function(){
    $('.inner').css({
    "transform":"rotateX(180deg)",
    "background-color": "aqua"
    })
},function(){
    $('.inner').css({
        "transform":"",
        "background-color":"yellow"
})
})

