const FilterButton = ({categoria, setCategoria}) => {

    
    return(
        <button
        className="FButton"
        onClick={() => setCategoria(categoria)}>
            {categoria}
        </button>
    );
};

export default FilterButton;