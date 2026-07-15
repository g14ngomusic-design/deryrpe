document.getElementById("loginBtn").addEventListener("click", function () {

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const mensaje = document.getElementById("mensaje");

    if (email === "" || password === "") {
        mensaje.innerHTML = "Completa todos los campos.";
        return;
    }

    if (email === "admin@ryrstore.pe" && password === "123456") {
        mensaje.style.color = "#4CAF50";
        mensaje.innerHTML = "Acceso concedido...";
        
        setTimeout(() => {
            window.location.href = "dashboard.html";
        }, 1000);

    } else {
        mensaje.style.color = "#ff5252";
        mensaje.innerHTML = "Correo o contraseña incorrectos.";
    }

});