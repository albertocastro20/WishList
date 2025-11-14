import FilterButton from "./FilterButtons";

const ButtonsContainer = ({ categorias, setCategoria }) => {
    return (
        <div className="contenedorBotones">
            {/*para carda categoría, crea un boton */}
            {categorias.map(categoria => ( 
                <FilterButton
                    key={categoria}
                    categoria={categoria}
                    setCategoria={setCategoria}
                />
            ))}
        </div>
    );
}

export default ButtonsContainer;