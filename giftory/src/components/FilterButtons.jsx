const FilterButton = ({categoria, setCategoria}) => {

    
    return(
        <button
        className="FButton"
        onClick={() => setCategoria(categoria)} //Actualiza la categoría mostrada
        >  
            {categoria}
        </button>
    );
};

export default FilterButton;