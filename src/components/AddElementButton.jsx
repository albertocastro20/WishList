const ButtonAddElement = ({setMostrarInputCard}) => {
    return(
        <button className="buttonAddElement"
        onClick={() => setMostrarInputCard(true)}>
            +
        </button>
    );
};

export default ButtonAddElement;