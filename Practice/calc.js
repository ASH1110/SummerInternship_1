var buttons = document.getElementsByClassName('btn')
var dis = document.getElementById('display');
var operand1 = 0;
var operator = null;
var operand2 = null;

for(var i=0;i<buttons.length;i++)
{
    buttons[i].addEventListener('click',function(){
        var val = this.getAttribute('value');
        if((val == '+') || (val == '-') || (val == '*') || val == '/'){
            operand1 = dis.textContent;
            dis.innerHTML = "";
           operator = val;
        }else if(val == '='){
            operand2 = dis.textContent;
            var result = 0;
            result = eval(operand1 + " "+ operator+" "+operand2);
            dis.innerHTML = result;
         
        }else if(val == 'AC')
        {
            operand1 = 0;
            operator = null;
            operand2 = null;
            dis.innerHTML = "";

        }
        else{
                dis.innerHTML +=  val;
        }
        
       
       
    });
}
