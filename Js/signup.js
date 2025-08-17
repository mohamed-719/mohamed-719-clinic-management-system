
    document.getElementById("facebook").onmouseover = function() {this.style.scale = "1.1";};
    document.getElementById("facebook").onmouseout = function() {this.style.scale = "1";};
    document.getElementById("fullName").onmouseover = function() {this.style.scale = "1.1";};
    document.getElementById("fullName").onmouseout = function() {this.style.scale = "1";};
    document.getElementById("phone").onmouseover = function() {this.style.scale = "1.1";};
    document.getElementById("phone").onmouseout = function() {this.style.scale = "1";};
    document.getElementById("email").onmouseover = function() {this.style.scale = "1.1";};
    document.getElementById("email").onmouseout = function() {this.style.scale = "1";};
    document.getElementById("gender").onmouseover = function() {this.style.scale = "1.1";};
    document.getElementById("gender").onmouseout = function() {this.style.scale = "1";};
    document.getElementById("password").onmouseover = function() {this.style.scale = "1.1";};
    document.getElementById("password").onmouseout = function() {this.style.scale = "1";};
    document.getElementById("rep-password").onmouseover = function() {this.style.scale = "1.1";};
    document.getElementById("rep-password").onmouseout = function() {this.style.scale = "1";};
    document.getElementById("sub").onmouseover = function() { this.style.scale = "1.1";};
    document.getElementById("sub").onmouseout = function() {this.style.scale = "1";};
    document.getElementById("dob").onmouseover = function() {this.style.scale = "1.1";};
    document.getElementById("dob").onmouseout = function() {this.style.scale = "1";};
    document.getElementById("facebook").onclick = function() {
    window.open("https://www.facebook.com", "_blank");};
   
    let name = document.getElementById("fullName");
    let nameError = document.getElementById("name-error");
    let phone = document.getElementById("phone");
    let phoneError = document.getElementById("phone-error");
    let email = document.getElementById("email");
    let emailError = document.getElementById("email-error");
    let gender = document.getElementById("gender");
    let gendererror = document.getElementById("gender-error");
    let dob = document.getElementById("dob");
    let doberror = document.getElementById("dob-error");
    let password = document.getElementById("password");
    let passwordError = document.getElementById("password-error");
    let repPassword = document.getElementById("rep-password"); 
    let repPasswordError = document.getElementById("rep-password-error");

    // Validation
    
    

    function validateName(eve)
    {
        if (name.value.length < 8) 
            {
                nameError.style.display = 'block';
                eve.preventDefault();
                error.style.size = '1px';
                return false;
            }
            else 
            {
                nameError.style.display = 'none';
                return true;
            }
    }

    function validatePhone(eve) {
        phonePattern = /^\+20\d{10}$/;
        if (!phonePattern.test(phone.value)) {
            phoneError.style.display = 'block';
            eve.preventDefault();
            return false;
        } else {
            phoneError.style.display = 'none';
            return true;
        }
    }


    function validateEmail(eve) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value)) {
            emailError.style.display = 'block';
            eve.preventDefault();
            return false;
        } else {
            emailError.style.display = 'none';
            return true;
        }
    }

    function validateGender(eve) {
        if (gender.value === "") {
            gendererror.style.display = 'block';
            eve.preventDefault();
            return false;}
        else {
            gendererror.style.display = 'none';
            return true;
        }
    }

    function validateDob(eve) {
        const today = new Date();
        const dobDate = new Date(dob.value);
        const datepattern = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/
        if (dob.value === "" || !datepattern.test(dob.value) || dobDate >= today) {
            doberror.style.display = 'block';
            eve.preventDefault();
            return false;
        }
        else {
            doberror.style.display = 'none';
            return true;
        }
    }

    
    function validatePassword(eve) {
        const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (!passwordPattern.test(password.value)) {
            passwordError.style.display = 'block';
            eve.preventDefault();
            return false;
        } else {
            passwordError.style.display = 'none';
            return true;
        }
    }

    function validateRepPassword(eve) {
        if (repPassword.value !== password.value) {
            repPasswordError.style.display = 'block';
            eve.preventDefault();
            return false;
        } else {
            repPasswordError.style.display = 'none';
            return true;
        }
    }

    function validatAll(eve){
        if (validateName (eve) &&  validatePhone(eve) && validateEmail(eve) && validateGender(eve)  && validateDob(eve) &&
        validateDob(eve) && validatePassword(eve) && validateRepPassword(eve))
        {
                alert("Form submitted successfully!");
                return true;
        }
        else
        {
            eve.preventDefault();
            return false;
        }
       
    }
    document.getElementById("signup-form").addEventListener("submit", async function(eve) {
        eve.preventDefault();
        const data = {
            username: document.getElementById("fullName").value,
            email: document.getElementById("email").value,
            password: document.getElementById("password").value,
            phone: document.getElementById("phone").value,
            birthdate: document.getElementById("dob").value,
            gender: document.getElementById("gender").value
        };
        const response = await fetch("https://localhost:7026/api/Auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        const result = await response.json();
        alert(result.Message || "Registration failed!");
    });



    
