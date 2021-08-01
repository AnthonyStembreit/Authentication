$("#loginSubmit").on("click", (e)=>{
    e.preventDefault();
    let userInfo = {
        email: $("#email-login").val(),
        password: $("#password-login").val()
    }
})