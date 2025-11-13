import { useState } from "react";
import MenuOpciones from "./MenuOpciones";

const Card = ({ gift, onDelete, onChangeState, onEdit}) => {
    const { id, name, imagen, descripcion, costo, link, comprado } = gift

    
    return (
        <div className={"Card " + (comprado ? "comprado" : "")}>
            <div className="contenedorTitulo">
                <h3 className="Titulo">{name}</h3>
                <MenuOpciones
                    onDelete={onDelete}
                    onChangeState={onChangeState}
                    onEdit={onEdit}
                    id={gift.id}
                />
            </div>


            <a href={link}>
                <img className="imagenCard" height={100} src={imagen} />
            </a>

            <p className="descripcion">{descripcion}</p>
            <p className="Costo">Costo: ${costo}</p>
        </div>

    );
};


export default Card;