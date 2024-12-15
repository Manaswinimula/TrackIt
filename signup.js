const signupForm = document.getElementById('signUpForm');
const errorMessageContainer = document.getElementById('sigunErrorMessage');

signupForm.addEventListener('submit', function(event){
    event.preventDefault();
    
    const username = document.getElementById('Username').value;
    const email = document.getElementById('Email').value;
    const password = document.getElementById('password').value;

    if (username && email && password){
        let existingUsers = JSON.parse(localStorage.getItem('users')) || [];
        let userExists = existingUsers.find(user=>user.email=== email);

        if (userExists){
            errorMessageContainer.textContent = 'This email is already reistered. Please Try again'
            return;
        }
        
        const newUser = {
            username,
            email,
            password
        };

        existingUsers.push(newUser);
        localStorage.setItem('users', JSON.stringify(existingUsers));

        window.location.href = 'loginPage.html';
    }else{
        errorMessageContainer.textContent = 'Please fill in all fields'
    }

})