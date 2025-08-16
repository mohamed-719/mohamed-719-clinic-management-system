
    document.getElementById("facebook").onmouseover = function() {
        this.style.scale = "1.1";
    };
    document.getElementById("facebook").onmouseout = function() {
        this.style.scale = "1";
    };
    document.getElementById("fullName").onmouseover = function() {
        this.style.scale = "1.1";
    };
    document.getElementById("fullName").onmouseout = function() {
        this.style.scale = "1";
    };
    document.getElementById("phone").onmouseover = function() {
        this.style.scale = "1.1";
    };
    document.getElementById("phone").onmouseout = function() {
        this.style.scale = "1";
    };
    document.getElementById("email").onmouseover = function() {
        this.style.scale = "1.1";
    };
    document.getElementById("email").onmouseout = function() {
        this.style.scale = "1";
    };
    document.getElementById("gender").onmouseover = function() {
        this.style.scale = "1.1";
    };
    document.getElementById("gender").onmouseout = function() {
        this.style.scale = "1";
    };
    
    document.getElementById("password").onmouseover = function() {
        this.style.scale = "1.1";
    };
    document.getElementById("password").onmouseout = function() {
        this.style.scale = "1";
    };
    document.getElementById("rep-password").onmouseover = function() {
        this.style.scale = "1.1";
    };
    document.getElementById("rep-password").onmouseout = function() {
        this.style.scale = "1";
    };
    document.getElementById("sub").onmouseover = function() {
        this.style.scale = "1.1";
    };
    document.getElementById("sub").onmouseout = function() {
        this.style.scale = "1";
    };
    document.getElementById("dob").onmouseover = function() {
        this.style.scale = "1.1";
    };
    document.getElementById("dob").onmouseout = function() {
        this.style.scale = "1";
    };

   document.getElementById("facebook").onclick = function() {
    window.open("https://www.facebook.com", "_blank");
    };
   

    


    
document.getElementById("signup-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("fullName").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();
  const gender = document.getElementById("gender").value;
  const dob = document.getElementById("dob").value;
  const password = document.getElementById("password").value;
  const insurance = document.getElementById("insurance").checked;

  if (!name || !phone || !email || !gender || !dob || !password) {
    alert("Please fill all required fields.");
    return;
  }

  console.log("Signed up:", {
    name, phone, email, gender, dob, password
  });

  alert("Signup successful! (This is a demo)");
});
document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const remember = document.getElementById("remember").checked;

  if (!email || !password) {
    alert("Please fill in both fields.");
    return;
  }

  console.log("Logging in:", { email, password, remember });
  alert("Login successful! (This is just a demo)");
});
