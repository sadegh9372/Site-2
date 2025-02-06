document.getElementById("show-button").addEventListener("click", function() {

    let passinput = document.getElementById("pass");
    if (passinput.type === "password") {
        passinput.type = "text";
    } else (passinput.type = "password");
});