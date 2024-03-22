
    import { validatePassword, validateUsername } from "../../Validations/Login";
    async function handleSubmit(event) {
    event.preventDefault();
    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;

    if (!validateUsername(username)) {
        alert("Por favor, introduce un nombre de usuario válido.");
        return;
    }

    if (!validatePassword(password)) {
        alert("Por favor, introduce una contraseña válida (mínimo 8 caracteres).");
        return;
    }

    const formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);

    try {
        const response = await fetch("http://localhost:8082/api/LoginUser/login",{
        method: "POST",
        body: formData,
        });

        if (!response.ok) {
        throw new Error("Error al enviar los datos del formulario");
        }

        console.log("Datos del formulario enviados correctamente");
    } catch (error) {
        alert("Error al enviar los datos del formulario:", error);
    }
    }
    export default handleSubmit;
