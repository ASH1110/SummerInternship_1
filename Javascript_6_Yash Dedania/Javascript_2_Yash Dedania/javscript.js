var cnt=0,cnt1=0,cnt2=0;
var rcnt1=-1;
var tbl = document.getElementById("tbl");

creatRow(1);
tbl.rows[1].firstChild.innerHTML = "Count = 0";
tbl.rows[1].firstChild.nextSibling.innerHTML = "Count = 0";
tbl.rows[1].lastChild.innerHTML = "Count = 0";
function creatRow(rowidx){
    var row = tbl.insertRow(rowidx);
    var a = row.insertCell(0);
    var b = row.insertCell(1);
    var c= row.insertCell(2);
    rcnt1++;
}

function btn() {
    if(cnt == rcnt1){
        creatRow(rcnt1+1);
    }
    cnt++;
    tbl.rows[cnt].firstChild.innerHTML = "<button type=\"button\" onclick=\"btn()\" > Button</button > ";
    tbl.rows[rcnt1+1].firstChild.innerHTML = "Count = " + cnt;
  }

  function textbox() {
    if(cnt1 == rcnt1){
        creatRow(rcnt1+1);
    }
    cnt1++;
    tbl.rows[cnt1].firstChild.nextSibling.innerHTML = "<input type=\"text\" onclick=\"myFunction1()\" placeholder=\"TextBox\">";
    tbl.rows[rcnt1+1].firstChild.nextSibling.innerHTML = "Count = " + cnt1;
    
  }

  function dropdown() {
    
    if(cnt2 == rcnt1){
        creatRow(rcnt1+1);
    }
    cnt2++;
    tbl.rows[cnt2].lastChild.innerHTML = "<select name=\"\" id=\"\" onclick=\"myFunction2()\"><option value = \"\" > Drop</option></select >";
    tbl.rows[rcnt1+1].lastChild.innerHTML = "Count = " + cnt2;
  }


