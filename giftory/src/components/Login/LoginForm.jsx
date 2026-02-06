import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginService } from "../../services/login";

const Login = ({ llenarToken }) => {

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [errorLogin, setErrorLogin] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        // Llamamos a la función que pasaremos desde la página o servicio

        const credenciales = { username: user, password: password };

        try {
            const token = await loginService.loginUser(credenciales);
            llenarToken(token, user);
            setErrorLogin(false);
            navigate("/");
        }
        catch (error) {
            console.error("Error en POST", error);
            setErrorLogin(true);
        }

    }

    return (
        <>
            {
                errorLogin && ( //Si es true, se muestra el componente del popup
                    <p>Username or password incorrect. Try again</p>
                )
            }
            <input
                type="text"
                placeholder="Username"
                className="inputLogin"
                value={user}
                onChange={(e) => setUser(e.target.value)}
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
                Login
            </button>

            <button
                className="botonLogin"
                onClick={() => { navigate("/register") }}
            >
                Are you new in this site?
            </button>


        </>


    );
};

export default Login;