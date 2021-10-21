function verifyPassword(){
    var pass1 = document.getElementById("password1").value;
    var pass2 = document.getElementById("password2").value;
    if(pass1.length < 8){
        document.getElementById("message").innerHTML = "**Password Length Must Be Atleast 8 Characters";
        return false   
    }
    if( pass1 !== pass2){
        document.getElementById("message").innerHTML = "  **Password and Confirm Password Does Not Correspond";
        return false
    }
}