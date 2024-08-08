function showContent() {
    document.querySelector('.navigation').classList.remove('hidden');
    document.querySelector('.wrapper').classList.remove('hidden');
    document.querySelector('.footer').classList.remove('hidden');
    document.querySelector('.login-container').classList.add('hidden');
    document.querySelector('.register-container').classList.add('hidden');
}

document.getElementById('login-button').addEventListener('click', showContent);
document.getElementById('register-button').addEventListener('click', showContent);