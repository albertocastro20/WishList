import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
//Se usa este contador para almacenar el id de las nuevas Cards
//let i = 4;

const InputCard = ({ setMostrarInputCard, agregarNuevoElemento, regaloEditar, handleEditar, categoriaSeleccionada,
    setMostrarMensaje }) => {



    //Definimos los estados para cada uno de los campos
    const [titulo, setTitulo] = useState(regaloEditar ? regaloEditar.name : "");
    const [urlImagen, setUrlImagen] = useState(regaloEditar ? regaloEditar.imagen : "");
    const [url, setUrl] = useState(regaloEditar ? regaloEditar.link : "");
    const [descripcion, setDescripcion] = useState(regaloEditar ? regaloEditar.descripcion : "");
    const [precio, setPrecio] = useState(regaloEditar ? regaloEditar.costo : "");
    const [categoriaObjeto, setCategoriaObjeto] = useState(regaloEditar ? regaloEditar.categoria : categoriaSeleccionada);



    //Función para verificar los campos
    function verificarCampos() {
        //Validar campos de texto obligatorios
        if (titulo.trim() === '') {
            alert("El campo Título es obligatorio.");
            return false;
        }
        if (descripcion.trim() === '') {
            alert("El campo Descripción es obligatorio.");
            return false;
        }
        if (urlImagen.trim() === '') {
            alert("La URL de la imagen es obligatoria.");
            return false;
        }

        // Validamos que el precio sea un número válido y que no esté vacía
        if (precio === '' || isNaN(Number(precio)) || Number(precio) <= 0) {
            alert("El precio debe ser un número válido y mayor que cero.");
            return false;
        }
        // Si todas las comprobaciones pasan, los campos son válidos
        return true;
    }


    //Definimos la funcion para que cuando se registre algo, se cree una nueva Card
    function handleRegistro(event) {
        if (verificarCampos()) {
            //Verificamos si se llamó para edición
            if (regaloEditar) {
                //Mantenemos el id
                const regaloActualizado = {
                    id: regaloEditar.id, name: titulo, imagen: urlImagen, comprado: regaloEditar.comprado,
                    descripcion: descripcion, costo: precio, categoria: categoriaObjeto, link: url
                };
                handleEditar(regaloActualizado);
                setMostrarInputCard(false);
            }

            //O si se crea uno nuevo
            else {
                event.preventDefault();
                //Creamos un nuevo objeto con sus campos
                const objeto = { id: uuidv4(), name: titulo, imagen: urlImagen, descripcion: descripcion, costo: precio, categoria: categoriaObjeto, link: url };

                //Llamamos la funcion de crear un objeto desde App
                agregarNuevoElemento(objeto);
                //Aumentamos el contador para una futura Card nueva

                //Ocultamos el InputCard
                setMostrarInputCard(false);
            }

            //Si se completa cualquiera de los dos, muestra el mensaje
            setMostrarMensaje(true);
            //Cambia el state después de 3 segundos
            setTimeout(() => {
                setMostrarMensaje(false);
            }, 3000);
        }

        else {
            alert("Error en los campos");
        }


    }

    return (
        <div className="Card">

            <input
                className="Titulo"
                type="text"
                placeholder="Nombre"
                value={titulo}
                onChange={(event) => setTitulo(event.target.value)}
            />

            <label>
                🔗
                <input
                    className="imagenCard"
                    type="text"
                    placeholder="URL de la imagen"
                    value={urlImagen}
                    onChange={(event) => setUrlImagen(event.target.value)}
                />

            </label>


            <textarea
                className="descripcionInput"
                type="text"
                placeholder="Descripcion del producto"
                value={descripcion}
                onChange={(event) => setDescripcion(event.target.value)}
            />

            <input
                className="urlObjeto"
                type="text"
                placeholder="URL del objeto"
                value={url}
                onChange={(event) => setUrl(event.target.value)}
            />

            <div>
                <input
                    className="InputCosto"
                    type="number"
                    placeholder="Precio"
                    value={precio}
                    onChange={(event) => setPrecio(event.target.value)}
                />
                <select
                    name="selectorCategoria"
                    id="selectorCategoria"
                    value={categoriaObjeto}
                    onChange={(event) => setCategoriaObjeto(event.target.value)}
                >
                    <option value="Gifts">🎁Gifts</option>
                    <option value="Travels">🛬Travel</option>
                    <option value="Dates">💕Date</option>
                </select>

            </div>


            <div>
                <button
                    className="botonRegistrar"
                    onClick={() => setMostrarInputCard(false)} //Solo cambia el state para volver a ocultarlo
                >
                    Cancelar
                </button>

                <button
                    className="botonRegistrar"
                    onClick={handleRegistro} //Llama a la función de arriba
                >
                    Registrar
                </button>
            </div>

        </div>

    );
}

export default InputCard