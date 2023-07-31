function fibo(){
    var num=document.getElementById("input__number").value;
    var i=1;
    var j=1;
    var fiboSum=2;
    for(var k=0;k<num-2;k++){
        var l=i+j;
        fiboSum+=l;
        i=j;
        j=l;
    }
    document.write(fiboSum);
}