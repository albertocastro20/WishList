import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginService } from "../../services/login";

const RegisterForm = ({ llenarToken }) => {

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        // Llamamos a la función que pasaremos desde la página o servicio

        const credenciales = { username: user, password: password, email: email };

        try {
            const token = await loginService.registerUser(credenciales);
            llenarToken(token, user);
            navigate("/");
        }
        catch (error) {
            console.error("Error en POST", error);
        }

    }

    return (
        <>
            <input
                type="text"
                placeholder="Username"
                className="inputLogin"
                value={user}
                onChange={(e) => setUser(e.target.value)}
            />

            <input
                type="text"
                placeholder="Email"
                className="inputLogin"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
                type="password"
                placeholder="Password"
                className="inputLogin"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button
                className="botonLogin"
                type="submit"
                onClick={handleSubmit}
            >
                Register account
            </button>

            <button
                className="botonLogin"
                onClick={() => {navigate("/login")}}
            >
                Do you have account?
            </button>


        </>


    );
};

export default RegisterForm;