    document.getElementById("facebook").onmouseover = function() {
        this.style.scale = "1.1";
    };
    document.getElementById("facebook").onmouseout = function() {
        this.style.scale = "1";
    };
    document.getElementById("email").onmouseover = function() {
        this.style.scale = "1.1";
    };
    document.getElementById("email").onmouseout = function() {
        this.style.scale = "1";
    };
     document.getElementById("password").onmouseover = function() {
        this.style.scale = "1.1";
    };
    document.getElementById("password").onmouseout = function() {
        this.style.scale = "1";
    };
     document.getElementById("sub").onmouseover = function() {
        this.style.scale = "1.1";
    };
    document.getElementById("sub").onmouseout = function() {
        this.style.scale = "1";
    };
    document.getElementById("welcome").onmouseover = function() {
        this.style.scale = "1.1" , this.style.color = "#007bff";
    };
    document.getElementById("welcome").onmouseout = function() {
        this.style.scale = "1" , this.style.color = "black";
    };

    document.getElementById("facebook").onclick = function() 
    {
        window.open("https://www.facebook.com" , "_blank");
    };

    document.getElementById("login-form").addEventListener("submit", function(eve){
    eve.preventDefault();
    
    var email = document.getElementById("email").value;
    localStorage.setItem("username", email);
    var password = document.getElementById("password").value;
    localStorage.setItem("email", password);
    alert("Welcome");

});