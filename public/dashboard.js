$(document).ready(() => {
    $.get("/api/user_data").then(function (data) {
        $("#user-welcome").text("Hello, "+data.name);
    });
});
