$("#loginSubmit").on("click", (e)=>{
    e.preventDefault();
    let userInfo = {
        email: $("#email-login").val(),
        password: $("#password-login").val()
    }
    loginRequest(userInfo)
})

function loginRequest(user){
    console.log(user)
    if(user.email === "" || user.password === ""){
        return "Must have an email and password!"
    }
    $.post("/api/login", user).then(function() {
        window.location.replace("/dashboard");
      })
      .catch(function(err) {
        console.log(err);
      });
}