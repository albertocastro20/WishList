import LoginForm from "../components/Login/LoginForm"

const LoginPage = ({ setToken, token, llenarToken }) => {

    return (
        <>
            <h1>Giftory</h1>
            <h3>Iniciar sesión en Giftory</h3>

            <div className="preview">

            </div>

            <div className="LoginFormContainer">
                <LoginForm
                    llenarToken={llenarToken}
                >
                </LoginForm>

            </div>
        </>

    );
};

export default LoginPage;