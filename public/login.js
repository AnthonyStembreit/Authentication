$("#loginSubmit").on("submit", (e)=>{
    e.preventDefault();
    let userInfo = {
        email: $("#email-login").val(),
        password: $("#password-login").val()
    }
    $("#password-login").val("")
    $("#email-login").val("")
    loginRequest(userInfo)
})
function loginRequest(user){
    console.log(user)
    if(user.email === "" || user.password === ""){
        console.log("Must have an Email and Password!")
    }
    $.post("/api/login", user).then(function() {
        window.location.replace("/dashboard");
      })
      .catch(function(err) {
        console.log(err);
        if(err.status === 401){
            console.log("Email or Password is Wrong! Please try again.")
        }
      });
}