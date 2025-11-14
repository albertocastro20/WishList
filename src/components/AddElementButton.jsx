const ButtonAddElement = ({ setMostrarInputCard }) => {
    return (
        <button className="buttonAddElement"
            onClick={() => setMostrarInputCard(true)} //Cuando se presioná, modifica el state
        >
            +
        </button>
    );
};

export default ButtonAddElement;