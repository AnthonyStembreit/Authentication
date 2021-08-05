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
    if(user.email === "" || user.password === ""|| user.name === ""){
        $("#alert-signup").attr("style", "display:block");
        $("#alert-signup").text("Must have a Name, Email, and Password!")
    }
    $.post("/api/signup", user).then((data) => {
       if(data[1]=== false){
        $("#alert-signup").attr("style", "display:block");
        $("#alert-signup").text("Something went Wrong :( -Account Not Created.")
       }else if(data[1] === true){
           $("#alert-signup").attr("style", "display:none");
           window.location.replace("/login");
       }
       else{
           console.log(data[1])
       }
    }).catch(function(err) {
        console.log(err);
      });
}