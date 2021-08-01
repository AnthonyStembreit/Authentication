$("#signupSubmit").on("click", (e)=>{
    e.preventDefault();
    let newUser = {
        name: $("#name-signup").val(),
        email: $("#email-signup").val(),
        password: $("#password-signup").val()
    }
})