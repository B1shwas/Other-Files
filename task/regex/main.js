function checkPass() {
    var apple=document.getElementById("password").value;
     var regex = /^ (?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).*$/;
     var check=regex.test(apple);
     if(check==true){
         return "correct password format";
      
     }
     else{
        return "incorrect password format";

     }
    };