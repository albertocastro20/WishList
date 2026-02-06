import { useState } from "react";
import MenuOpciones from "./MenuOpciones";

const Card = ({ gift, onDelete, onChangeState, onEdit }) => {
    //Descompone el objeto en cada campo para trabajar de manera mas facil
    const { id, name, imagen, descripcion, costo, link, comprado } = gift


    return (
        //Modifica la clase de la card para mostrar si está comprado o no
        <div className={"Card " + (comprado ? "comprado" : "")}>
            <div className="contenedorTitulo">
                <h3 className="Titulo">{name}</h3>
                <MenuOpciones
                    //Al menú, se le pasan estas funciones para que puedan ser activadas por los botones en el
                    onDelete={onDelete}
                    onChangeState={onChangeState}
                    onEdit={onEdit}
                    id={id} //Se usa el id de la Card desde el que se activó algo del menú
                />
            </div>


            <a href={link}>
                <img className="imagenCard" height={100} src={imagen} />
            </a>

            <div className="contenedorDescripcion">
                <p className="descripcion">{descripcion}</p>
            </div>

            <p className="Costo">Costo: ${costo}</p>
        </div>

    );
};


export default Card;