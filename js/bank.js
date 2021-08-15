document.getElementById('login-submit').addEventListener('click', function () {
    // get user email 
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    if (userEmail == 'siamalislam692@gmail.com' && userPassword == 'secret') {
        window.location.href = "banking.html";
    }
})

//handle deposit button
document.getElementById('deposit-button').addEventListener('click', function () {
    // get the amount deposited 
    const depositInput = document.getElementById('deposit-input');
    const depositAmount = depositInput.value;
    console.log(depositAmount);

    const depositTotal = document.getElementById('deposit-total');
    depositTotal.innerText = depositAmount;
    depositInput.value = '';
})
