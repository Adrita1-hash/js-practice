function checkLogin() {
     if(document.getElementById("uname").value == "" 
     && document.getElementById("pname").value == ""){
        document.getElementById("message").innerHTML ="Please fill all fields";
     }
     else{
        document.getElementById("message").innerHTML = "Login successful.";
     }
}