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
        $("#signup-nav").removeClass("active-nav");
        $("#form-label").text("Login Here:");
        $("#formBtn").text("Login");
        $("#login-nav").addClass("active-nav");
    }
    function signupDisplay(){ 
        let label = $("<label>Name</label>").attr("for", "name-input")
        $("#formSubmit").prepend(label, $("<input>").attr("id", "name-input"));
        
        $("#login-nav").removeClass("active-nav");
        $("#form-label").text("Signup Below:");
        $("#formBtn").text("Signup");
        $("#signup-nav").addClass("active-nav");
    }
})