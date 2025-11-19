import FilterButton from "./FilterButtons";

const ButtonsContainer = ({ categorias, setCategoria, estatus, setEstatus }) => {
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

            {/* RadioButtons para el filtrado del estatus */}
            <div className="contenedorEstatus">

                {/* Opción 1: Todos (All) */}
                <label>
                    <input
                        type="radio"
                        name="filtroEstatus" // Mismo nombre para el grupo
                        value="All"
                        checked={estatus === "All"} // Está seleccionado si estatus es "All"
                        onChange={() => setEstatus("All")} // Llama al setter para cambiar el estado
                    />
                    Todos
                </label>

                {/* Opción 2: Comprados (Bought) */}
                <label>
                    <input
                        type="radio"
                        name="filtroEstatus"
                        value="Comprado"
                        checked={estatus === "Comprado"}
                        onChange={() => setEstatus("Comprado")}
                    />
                    Comprados
                </label>

                {/* Opción 3: Pendientes (Pending) */}
                <label>
                    <input
                        type="radio"
                        name="filtroEstatus"
                        value="Pendiente"
                        checked={estatus === "Pendiente"}
                        onChange={() => setEstatus("Pendiente")}
                    />
                    Pendientes
                </label>
            </div>
        </div>
    );
}

export default ButtonsContainer;