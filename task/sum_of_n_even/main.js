function even(){
var i=document.getElementById("input__number").value;
for(var j=0;j<i;j++){
    if(j % 2 == 0){
        document.write(j + "<br>");
    }
}
}