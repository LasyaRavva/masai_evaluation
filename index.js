document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function(event){
        event.preventDefault();

        const email = document.getElementById('email').value.trim();

        const password = document.getElementById('password').value.trim();

        const vaildEmail ="admin@gmail.com";

        const vaildPassword ="admin1234";

        if(email === vaildEmail && password === vaildPassword){
            alert("Login Success")
        } else{
            alert("Wrong email or password");
        }
    })
})