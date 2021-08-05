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
        $("#alert-login").text("Must have an Email and Password!")
        $("#alert-login").attr("style", "display:block");
    }
    $.post("/api/login", user).then(function() {
        $("#alert-login").attr("style", "display:none");
        window.location.replace("/dashboard");
      })
      .catch(function(err) {
          if(err.status === 401){
              $("#alert-login").text("Email or Password is Wrong! Please try again.")
              $("#alert-login").attr("style", "display:block");
            }else{
            console.log(err);
        }
      });
}