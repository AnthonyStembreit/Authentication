$("#formSubmit").on("submit", (e)=>{
    e.preventDefault();
    let name = ""
    if(e.target.value === "Signup"){
        name =     $("#name-input").val("");
    }
    let userInfo = {
        email: $("#email-input").val(),
        password: $("#password-input").val()
    }
    $("#password-login").val("")
    $("#email-login").val("")
    loginRequest(userInfo)
})
function loginRequest(user){
    console.log(user)
    if(user.email === "" || user.password === ""){
        $("#alert").text("Must have an Email and Password!")
        $("#alert").attr("style", "display:block");
    }
    $.post("/api/login", user).then(function() {
        $("#alert").attr("style", "display:none");
        window.location.replace("/dashboard");
      })
      .catch(function(err) {
          if(err.status === 401){
              $("#alert").text("Email or Password is Wrong! Please try again.")
              $("#alert").attr("style", "display:block");
            }else{
            console.log(err);
        }
      });
}