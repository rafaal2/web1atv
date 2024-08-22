// login.js

document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.getElementById('login-button');
    const emailInput = document.getElementById('email');
    const senhaInput = document.getElementById('senha');

    loginButton.addEventListener('click', function () {
        const email = emailInput.value.trim();
        const senha = senhaInput.value.trim();

        function isValidEmail(email) {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailPattern.test(email);
        }

        const validEmail = "usuario@exemplo.com";
        const validSenha = "usuario";

        if (!email && !senha) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        if (!email) {
            alert("Por favor, insira seu e-mail.");
            return;
        }

        if (!senha) {
            alert("Por favor, insira sua senha.");
            return;
        }

        if (!isValidEmail(email)) {
            alert("Por favor, insira um e-mail válido.");
            return;
        }

        if (email === validEmail && senha === validSenha) {
            alert("Login bem-sucedido!");
            window.location.href = "index.html";
        } else {
            alert("Credenciais inválidas. Por favor, tente novamente.");
        }
    });
});
