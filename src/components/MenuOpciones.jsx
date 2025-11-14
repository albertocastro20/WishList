import { useState } from "react";

const MenuOpciones = ({ onDelete, onChangeState, onEdit, id }) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false); //State para ver si se muestra el menú

    

    const handleMenuOpcion = (accion) => {

        //Verifica que boton fue presionado, y llama a su respectiva función
        if (accion === "Eliminar") {
            onDelete(id);
        }

        if (accion === "Comprado") {
            onChangeState(id);
        }

        if (accion === "Editar") {
            onEdit(id);
        }

        setIsMenuOpen(false); //Oculta el menú cuando se presiona un boton
    }

    return (
        <>
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)} //Cambia el estado del state cada que se presiona
                className="botonOpciones"
            >
                ...
            </button>

            {isMenuOpen && ( //Verifica si está abierto el menú
                <div className="contenedorOpciones">
                    <button
                        className="botonesOpcion"
                        onClick={() => handleMenuOpcion("Comprado")}
                    >
                        Comprado
                    </button>

                    <button
                        className="botonesOpcion"
                        onClick={() => handleMenuOpcion("Editar")}
                    >Editar
                    </button>

                    <button
                        className="botonesOpcion"
                        onClick={() => handleMenuOpcion("Eliminar")}
                    >Eliminar
                    </button>
                </div>
            )

            }
        </>
    );
}

export default MenuOpciones;