function fibo(){
    var fib=document.getElementById("input__number").value;
    var i=1;
    var j=1;
    document.write(i +"<br>"+j +  "<br>");
    for(var k=0;k<fib-2;k++){
        var l=i+j;
        
        document.write(l+"<br>");
        i=j;
        j=l;
    }

}