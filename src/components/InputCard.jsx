import { useState } from "react";
//Se usa este contador para almacenar el id de las nuevas Cards
let i = 4;

const InputCard = ({ setMostrarInputCard, agregarNuevoElemento }) => {
    
    //Definimos los estados para cada uno de los campos
    const [titulo, setTitulo] = useState("");
    const [urlImagen, setUrlImagen] = useState("");
    const [url, setUrl] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [precio, setPrecio] = useState("");
    const [categoriaObjeto, setCategoriaObjeto] = useState("Gifts");

    //Definimos la funcion para que cuando se registre algo, se cree una nueva Card
    function handleRegistro(event) {
        event.preventDefault();
        //Creamos un nuevo objeto con sus campos
        const objeto = { id: i, name: titulo, imagen: urlImagen, descripcion: descripcion, costo: precio, categoria: categoriaObjeto, link: url };

        //Llamamos la funcion de crear un objeto desde App
        agregarNuevoElemento(objeto);
        //Aumentamos el contador para una futura Card nueva
        i++;
        //Ocultamos el InputCard
        setMostrarInputCard(false);
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

            <input
                className="imagenCard"
                type="text"
                placeholder="URL de la imagen"
                value={urlImagen}
                onChange={(event) => setUrlImagen(event.target.value)}
            />

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
                    <option value="Gifts">Gift</option>
                    <option value="Travels">Travel</option>
                    <option value="Dates">Date</option>
                </select>

            </div>


            <div>
                <button
                    className="botonRegistrar"
                    onClick={() => setMostrarInputCard(false)}
                >
                    Cancelar
                </button>

                <button
                    className="botonRegistrar"
                    onClick={handleRegistro}
                >
                    Registrar
                </button>
            </div>

        </div>

    );
}

export default InputCard