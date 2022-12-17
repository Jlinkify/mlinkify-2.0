const form = document.getElementById("password-form");

form.addEventListener("submit", (event) => {
	event.preventDefault(); // prevent the form from submitting

	const password = document.getElementById("password").value;
	if (password === "correctpassword") {
		// password is correct, show the protected content
		document.body.innerHTML = "<h1>Protected Content</h1><p>This is the protected content that is only visible to users who enter the correct password.</p>";
	} else {
		// password is incorrect, display an error message
		alert("Incorrect password. Please try again.");
	}
});
