import { useState } from "react";

const MenuOpciones = ({ onDelete, onChangeState, onEdit, id }) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
    }

    const handleMenuOpcion = (accion) => {
        if (accion === "Eliminar") {
            onDelete(id);
        }

        if (accion === "Comprado") {
            onChangeState(id);
        }

        if (accion === "Editar") {
            onEdit(id);
        }

        setIsMenuOpen(false);
    }

    return (
        <>
            <button
                onClick={toggleMenu}
                className="botonOpciones"
            >
                ...
            </button>

            {isMenuOpen && (
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