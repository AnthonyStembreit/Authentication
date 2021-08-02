$("#signupSubmit").on("click", (e)=>{
    e.preventDefault();
    let newUser = {
        name: $("#name-signup").val(),
        email: $("#email-signup").val(),
        password: $("#password-signup").val()
    }
    // signupRequest(newUser)
})
// function signupRequest(user){
//     console.log(user)
//     if(user.email === "" || user.password === ""){
//         return "Must have an email and password!"
//     }
//     $.ajax({
//         method: "POST",
//         body: user,
//         url: "/api/signup"
//     }).then((data) => {
//         console.log(data)
//     })
// }