$(document).ready(()=>{
    switch(window.location.pathname){
        case "/login":loginDisplay();
        break;
        case "/signup": signupDisplay();
        break;
        case "/password": passwordResetDisplay();
        case "/": signupDisplay();
        break;
        default: signupDisplay();
    }

    function loginDisplay(){
        $("#signup-nav").removeClass("active-nav");
        $("#form-label").text("Login Here:");
        $("#formBtn").text("Login");
        $("#login-nav").addClass("active-nav");
    }

    function signupDisplay(){ 
        let label = $("<label>Name</label>").attr("for", "name-input");
        $("#formSubmit").prepend(label, $("<input>").attr("id", "name-input"));
        $("#login-nav").removeClass("active-nav");
        $("#form-label").text("Signup Below:");
        $("#formBtn").text("Signup");
        $("#signup-nav").addClass("active-nav");
    }
    function passwordResetDisplay(){
        $("#formSubmit").addClass("hide");
        $("#passResetForm").removeClass("hide");
    }

    $("#passResetForm").on("submit", (e)=>{
        e.preventDefault();
        console.log(e)
        console.log($("#reset-email").val())
        
    })

    $("#formSubmit").on("submit", (e)=>{
        e.preventDefault();
        let userInfo = {
            email: $("#email-input").val(),
            password: $("#password-input").val()
        }
    
        if($("#formBtn").text() === "Signup"){
            userInfo.name = $("#name-input").val();
            $("#name-input").val("");
            signupRequest(userInfo);
        }
        else if($("#formBtn").text() === "Login"){
            loginRequest(userInfo)
        }
        $("#password-input").val("")
        $("#email-input").val("")
    })
    
    function loginRequest(user){
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
    
    function signupRequest(user){
        if(user.email === "" || user.password === "" || user.name === ""){
            $("#alert").attr("style", "display:block");
            $("#alert").text("Must have a Name, Email, and Password!")
            return;
        }
        $.post("/api/signup", user).then((data) => {
           if(data[1] === false){
            $("#alert").attr("style", "display:block");
            $("#alert").text("Something went Wrong :( Account Not Created.")
           }else if(data[1] === true){
               $("#alert").attr("style", "display:none");
               window.location.replace("/login");
           }
           else{
               console.log(data[1])
           }
        }).catch(function(err) {
            console.log(err);
          });
    }
})