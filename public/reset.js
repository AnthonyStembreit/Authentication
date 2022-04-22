function validateToken(){
    let paramArr = window.location.href.split('?token=')[1].split('&email=');
    let params = {
        token: decodeURIComponent(paramArr[0]),
        email: paramArr[1]
    };
    console.log(params)
    $.post("/api/user/validate-token", params).then(function(res) {
        console.log(res)
        if(res.showForm === false){
            $("#reset-form").attr("style", "display:none");
            $("#alert").text("Token has Expired!")
            $("#alert").attr("style", "display:block");
        }else{
            $("#reset-form").attr("style", "display:block");
        }
    })
    .catch(function(err) {
        if(err){
            $("#reset-form").attr("style", "display:none");
            $("#alert").text("Something Went Wrong!")
            $("#alert").attr("style", "display:block");
          }else{
          console.log(err);
      }
    })
}
$(document).ready(() => {
validateToken()
$("#reset-form").on("submit", e => {
    e.preventDefault();
    const newPass = $("#new-password").val().trim()
    const confirmPass = $("#confirm-password").val().trim()
    if(!newPass || !confirmPass){
        $("#alert").text("Must set a new password and confirm it!")
        $("#alert").attr("style", "display:block");
    }
    else if(newPass !== confirmPass){
        $("#alert").text("Passwords do not Match!")
        $("#alert").attr("style", "display:block");
    }
    else{
        console.log("now ajax call")
    }
})
$("#new-password").dblclick(e=>{
    e.preventDefault()
    if($("#new-password").attr("type")==="password"){
        $("#new-password").attr("type", "text")
    }else{
        $("#new-password").attr("type", "password")
    }
})
$("#confirm-password").dblclick(e=>{
    e.preventDefault()
    if($("#confirm-password").attr("type")==="password"){
        $("#confirm-password").attr("type", "text")
    }else{
        $("#confirm-password").attr("type", "password")
    }
})
})