
function checkPassword() {
    const password = document.getElementById('password').value;
    const correctPassword = "2004914";
    if (password === correctPassword) {
        document.getElementById('lock-screen').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
    } else {
        document.getElementById('error-msg').innerText = "كلمة السر غير صحيحة";
    }
}
