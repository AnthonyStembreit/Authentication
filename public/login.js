$("#loginSubmit").on("click", (e)=>{
    e.preventDefault();
    let userInfo = {
        email: $("#email-login").val(),
        password: $("#password-login").val()
    }
    loginRequest(userInfo)
})

function loginRequest(user){
    console.log("hit")
    if(user.email === "" || user.password === ""){
        return "Must have an email and password!"
    }
    $.ajax({
        method: "POST",
        body: user,
        url: "/api/login"
    }).then((data) => {
        console.log(data)
    })
}