var x = document.getElementById('ent');

x.addEventListener('click',function()
{
    var num = document.getElementById('formGroupExampleInput').value;
    let n = parseInt(num);
    if(n<10){
        if(!n){
            alert('Please enter a Number')
        }else if(n<0){
            alert('Please enter a positive Number')
        }else{
            let ans = "";
            for (let i = 1; i <= n; i++) {
                for (let j = n; j > i; j--) {
                ans += " ";
                }
                for (let k = 0; k < i; k++) {
                    ans += " * ";
                }
                ans += "\n";
            }
            
            
            for (let i = 1; i <= n - 1; i++) {
                for (let j = 0; j < i; j++) {
                    ans += " ";
                }
                for (let k = n - i; k > 0; k--) {
                ans += " * ";
                }
                ans += "\n";
            }
         console.log(ans)
        }
    }else{
        alert("Please Enter Number Less than 10")
    }
    

    
 
})