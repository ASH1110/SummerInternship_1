var x = document.getElementById('ent');
let string = "";
x.addEventListener('click',function()
{
    var num = document.getElementById('formGroupExampleInput').value;
    var  x1 = parseInt(num)
    if(x1<10){
        if(!x1){
            alert('Please enter a number')
        }else if(x1<0)
        {
            alert('Please enter a negative number')
        }
        else{
            var counter = 2;
    
            //Number of rows
            for(let i=1;i<=x1;i++)
            {
                //Number of Space Left Above
                for(let k =1;k<=x1-i;k++)
                {
                    string += " ";
                }
                //Printing the Elements
                for(let j=1;j<=2*i-1;j++)
                {
                    // string += "*";
                    while(!prime(counter)){
                        counter++;
                    }
                    string += counter+",";
                    counter++;
                }
                string += "\n";
            }
            console.log(string)
        }
    }else{
        alert('Please Enter Number less than 10')
    }
}
    )

    
    
    
    
    

    function prime(n){
        var i,flag;
        for(var i=2;i<n;i++){
            if(n%i!=0)
            flag=1;
            else{
                flag = 0;
                break;
            }
        }
        if (flag == 1 || n == 2)
          return (1);
       else
          return (0);
    }