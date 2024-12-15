const loginForm = document.getElementById('loginForm');
const loginErrorMessage = document.getElementById('loginErrorMessage');

loginForm.addEventListener('submit', function(event){
    event.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const existingUsers= JSON.parse(localStorage.getItem('users')) || [];
    const user = existingUsers.find(user=>user.email === email &&user.password === password);

    if (user){  
        localStorage.setItem('loggedInUser',JSON.stringify(user));
        window.location.href = 'index.html';
    }else{
        loginErrorMessage.textContent = 'Invalid email or password. Please try again.';
    }
});