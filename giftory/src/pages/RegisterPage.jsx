import RegisterForm from "../components/Login/RegisterForm";

const RegisterPage = ({ llenarToken }) => {

    return (
        <>
            <h1>🎁 Giftory 🎁 </h1>
            <h3>Please, register your account</h3>

            <div
                className="preview">
            </div>

            <div className="LoginFormContainer">
                <RegisterForm
                    llenarToken={llenarToken}
                >
                </RegisterForm>

            </div>
        </>

    );
};

export default RegisterPage;