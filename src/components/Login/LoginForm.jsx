import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginService } from "../../services/login";

const Login = ({ llenarToken }) => {

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        // Llamamos a la función que pasaremos desde la página o servicio

        const credenciales = { username: user, password: password };

        try {
            const token = await loginService.loginUser(credenciales);
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
                placeholder="Ingrese su usuario"
                className="inputLogin"
                value={user}
                onChange={(e) => setUser(e.target.value)}
            />
            <input
                type="text"
                placeholder="Ingrese su contraseña"
                className="inputLogin"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button
                className="botonLogin"
                type="submit"
                onClick={handleSubmit}
            >
                Login
            </button>

            <button
                className="botonLogin"
                onClick={() => {navigate("/register")}}
            >
                Are you new in this site?
            </button>


        </>


    );
};

export default Login;