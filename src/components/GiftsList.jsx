import Card from "./Card";
import ButtonAddElement from "./AddElementButton";
import InputCard from "./InputCard";
import { useState } from "react";


const GiftList = ({categoria, listaRegalos, agregarNuevoElemento, onDelete, onChangeState, onEdit}) => {
    const [mostrarInputCard, setMostrarInputCard] = useState(false);
    

    

    const filterList = listaRegalos.filter(gift => categoria === "All" ? gift : gift.categoria == categoria);

    return (
        <>
            <section className="GiftList">
                {filterList.map(gift => (
                    <Card
                        key={gift.id}
                        gift={gift}
                        onDelete={onDelete}
                        onChangeState={onChangeState}
                        onEdit={onEdit}
                    />
                ))}

                {filterList.length === 0 && (
                    <p>No hay regalos</p>
                )}

                {mostrarInputCard && (
                    <InputCard
                        setMostrarInputCard={setMostrarInputCard}
                        agregarNuevoElemento={agregarNuevoElemento}
                        
                        
                    />
                )}
                <ButtonAddElement
                    setMostrarInputCard={setMostrarInputCard}>

                </ButtonAddElement>

            </section>


        </>
    );
}

export default GiftList;