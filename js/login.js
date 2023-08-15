document.getElementById('btn-submit').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    emailField.value = '';
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    passwordField.value = '';

    if(email === 'kib@gmail.com' && password === 'renton77'){
        window.location.href = 'bank.html';
    }else{
        alert('invalid user');
    }
})