//Function to check email
function checkEmail() {
    const emailInput = document.getElementById("email");
    const emailValue = emailInput.value;
    const emailError = document.getElementById("emailError");
    const emailSuccess = document.getElementById("emailSuccess");
  
    
    if (
      emailValue.length > 3 &&
      emailValue.includes("@") &&
      emailValue.includes(".")
    ) {
      emailError.style.display =
        "Make sure email is more than 3 characters and has @ and a.";
      emailSuccess.textContent = " ";
      emailSuccess.style.display = "block";
    } else {
      emailSuccess.style.display = "none";
      emailError.style.display = "block";
    }
  }
  
  // Function to check password input
  function checkPassword() {
    const passwordInput = document.getElementById("password").value;
  
    if (passwordInput.length > 8) {
      document.getElementById("passwordError").style.display = "none";
      document.getElementById("passwordSuccess").innerText = "All good to go!";
    } else {
      document.getElementById("passwordError").style.display = "block";
      document.getElementById("passwordSuccess").innerText = "";
    }
  }
  
  // Event listeners for email and password inputs
  document.getElementById("email").addEventListener("input", checkEmail);
  document.getElementById("password").addEventListener("input", checkPassword);
  
  // Function for submit button
  function handleSubmit() {
    if (confirm("Are you sure you want to sign up?")) {
      alert("Successful signup!");
    } else {
      location.reload();
    }
  }