$("#signupSubmit").on("submit", (e)=>{
    e.preventDefault();
    let newUser = {
        name: $("#name-signup").val(),
        email: $("#email-signup").val(),
        password: $("#password-signup").val()
    };
    $("#name-signup").val("");
    $("#email-signup").val("");
    $("#password-signup").val("");
    signupRequest(newUser);
})
function signupRequest(user){
    console.log(user)
    if(user.email === "" || user.password === ""){
        return "Must have an email and password!"
    }
    $.post("/api/signup", user).then((data) => {
        console.log(data)
    })
}