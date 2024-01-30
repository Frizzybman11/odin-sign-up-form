function checkPassword() {
    let password = document.getElementById("password");
    let confirm_password = document.getElementById("confirm_password");
    if (password.value && confirm_password.value){
        if (password.value != confirm_password.value){
            document.getElementById("password_error").style.visibility = "visible"
            password.classList.add("password_invalid")
            confirm_password.classList.add("password_invalid")
        } else {
            document.getElementById("password_error").style.visibility = "hidden"
            password.classList.remove("password_invalid")
            confirm_password.classList.remove("password_invalid")
        }
    }
}