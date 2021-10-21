function verifyPassword(){
    var password = document.getElementById("password").value;
    if(password.length < 8){
        document.getElementById("message").innerHTML = "**Password Is Not Up to 8 characters!";
    }
}