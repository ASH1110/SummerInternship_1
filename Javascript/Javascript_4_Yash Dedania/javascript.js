var x =  document.getElementById('ent')
x.addEventListener('click',function(){
    var select = document.getElementById('language');
var value = select.options[select.selectedIndex].value;

if(value == 1)
{
    let temp = document.getElementById('formGroupExampleInput').value;
    let x = parseFloat(temp)
    let fareh = ((x*9)/5)+32;
    var x1 = document.getElementById('tex').innerHTML = "The temperature in Fahrenheit is "+fareh;
            document.getElementById('cal').appendChild(x);
   
}
else{
    let temp = document.getElementById('formGroupExampleInput').value;
    let x = parseFloat(temp)

    let cels = ((x-32)*5)/9;
    var x1 = document.getElementById('tex').innerHTML = "The temperature in Celsius is  "+cels;
            document.getElementById('cal').appendChild(x);
  
}
})