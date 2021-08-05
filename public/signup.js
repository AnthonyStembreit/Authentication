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
        console.log("Must have a Name, Email, and Password!")
    }
    $.post("/api/signup", user).then((data) => {
        window.location.replace("/login");
    }).catch(function(err) {
        console.log(err);
      });
}