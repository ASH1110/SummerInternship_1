var x = document.getElementById('submit');

x.addEventListener('click', ValidateForm)

function ValidateForm() {

    if(document.myform.fname.value == "" && document.myform.Email.value == "" && document.myform.password1.value == "" && document.myform.add.value == "" && document.myform.birthday.value == ""){
        
        document.getElementById('change').innerHTML = "*Please Enter the Name";
        document.getElementById('change').style.backgroundColor = "red";
        document.getElementById('change').style.fontSize = "12px";

        document.getElementById('change1').innerHTML = "*Please Enter the Email";
        document.getElementById('change1').style.backgroundColor = "red";
        document.getElementById('change1').style.fontSize = "12px";

        document.getElementById('change4').innerHTML = "*Please Enter the Password";
        document.getElementById('change4').style.backgroundColor = "red";
        document.getElementById('change4').style.fontSize = "12px";

        document.getElementById('change2').innerHTML = "*Please Enter the Address";
        document.getElementById('change2').style.backgroundColor = "red";
        document.getElementById('change2').style.fontSize = "12px";

        document.getElementById('change3').innerHTML = "*Please Enter the Birthday";
        document.getElementById('change3').style.backgroundColor = "red";
        document.getElementById('change3').style.fontSize = "12px";
    }

    if(validateName()==true && validateemail() == true && validatePassword()==true && validateAddress()==true && validateDrop()==true && validateDate()==true){
      
        document.getElementById('demo').innerHTML = "Output of Form is Displayed Here."
        document.getElementById('nameP').innerHTML = "Name: "+document.myform.fname.value
        document.getElementById('emailP').innerHTML = "Email: "+document.myform.Email.value
        document.getElementById('addrP').innerHTML = "Address: "+document.myform.add.value
        if(document.getElementById('radio1').checked == true){
            var answer = document.getElementById('radio1').value;
            document.getElementById('radioP').innerHTML = "Gender: "+answer;
        }
        else{
            var answer = document.getElementById('radio2').value;
            document.getElementById('radioP').innerHTML = "Gender: "+answer;
        }
        let hobby = [];
        if(document.getElementById('check1').checked){
            hobby.push(document.getElementById('check1').value)
        }
        if(document.getElementById('check2').checked){
            hobby.push(document.getElementById('check2').value);
        }
        if(document.getElementById('check3').checked){
            hobby.push(document.getElementById('check3').value);
        }
        var course = [];
        for(var option of document.getElementById('sel1').options){
            if(option.selected)
            {
                  course.push(option.text)
            }
        }
document.getElementById('selectP').innerHTML = "The Course Selected is "+course;
        document.getElementById('checkP1').innerHTML = "Hobby: "+hobby;   
      
        document.getElementById('dateP').innerHTML = "Birthday: "+document.myform.birthday.value
        


    }


   
}
   

function validateemail()  
{  
var x=document.myform.Email.value;  
var atposition=x.indexOf("@");  
var dotposition=x.lastIndexOf(".");  
if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
  alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
  return false;  
  }  
  return true;
}  

function validateName()
{
    var x = document.myform.fname.value;
    var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;

if(regName.test(x)){
    alert('Invalid name given.');
    return false;
}
return true;

}

function validatePassword(){
    var password = document.myform.password1.value;
    var passw=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
if(password.match(passw)) 
{ 
// alert('Correct, try another...')
return true;
}
else
{ 
alert('Wrong...Password !')
return false;
}
}

function validateAddress()
{
    if(document.myform.add.value == ""){
        alert("Please Enter the Address")
        return false
    }
    return true;
}

function validateDrop()
{
    if(document.myform.sel.selectedIndex=="")
{
alert ( "Please select any course!");
return false;
}
return true;
}

function validateDate()
{
    if(document.myform.birthday.value == "")
    {
        alert("Please select Date")
        return false;
    }
    return true;
}

function resetFunction(){
    document.getElementById("form1").reset();
}