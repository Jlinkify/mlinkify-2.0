const formData = new FormData();
formData.append('login', 'john.doe');
formData.append('password', 'johndoe123');

fetch("/api/user/login", {
    body: formData,
    method: "post"
});
