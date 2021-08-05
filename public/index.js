$(document).ready(()=>{
    console.log(window.location)
    switch(window.location.pathname){
        case "/login":loginDisplay();
        break;
        case "/signup":  signupDisplay();
        break;
        case "/":  signupDisplay();
        break;
        default:   signupDisplay();
    }
    function loginDisplay(){
        $("#signupSubmit").removeClass("active-form");
        $("#signup-nav").removeClass("active-nav");
        $("#form-label").text("Login Here:");
        $("#login-nav").addClass("active-nav");
        $("#loginSubmit").addClass("active-form");
    }
    function signupDisplay(){
        $("#loginSubmit").removeClass("active-form");
        $("#login-nav").removeClass("active-nav");
        $("#form-label").text("Signup Below:");
        $("#signup-nav").addClass("active-nav");
        $("#signupSubmit").addClass("active-form");
    }
})