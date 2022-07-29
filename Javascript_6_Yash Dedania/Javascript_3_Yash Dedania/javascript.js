var buttons = document.getElementsByClassName('btn')
var dis = document.getElementById('display');
var operand1 = 0;
var operator = null;
var operand2 = null;
var ans = document.getElementsByClassName('answer')


for(var i=0;i<buttons.length;i++)
{
    buttons[i].addEventListener('click',function(){
        var val = this.getAttribute('value');
        
       
        if((val == '+') || (val == '-') || (val == '*') || (val == '/') ||
        (val == '%')){
            operand1 = val;
            operator = val;
            dis.innerHTML += " "+val+" ";
            
        }else if(val == 'AC'){
            operand1 = 0;
            operator = null;
            operand2 = null;
            dis.innerHTML = "";
        }else if(val == '='){
            operand2 = dis.textContent;
            var array = operand2.split(" ");
            
            var first = array[0];
            var oper = array[1];
            var second = array[2];
            var result = 0;
            result = eval(first + " "+oper+" "+second)
            dis.innerHTML = result;
        }else if(val == 'C'){
            var x = dis.textContent;
            var last = x.charAt(x.length-1)
            dis.textContent = dis.textContent.replace(last,"")
        }else if(val == '+/-'){
             var x = parseInt(dis.textContent)
             console.log(x)
             if(x>0){
               var z = -Math.abs(x);
             }else{
              var z =  Math.abs(x)
             }
             z = z.toString()
             dis.textContent = z;
        }
        else{
            dis.innerHTML += val;
        }
        
       
       
    });
}
