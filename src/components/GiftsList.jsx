import Card from "./Card";
import ButtonAddElement from "./AddElementButton";
import InputCard from "./InputCard";

const GiftList = ({ categoria, listaRegalos, agregarNuevoElemento, onDelete, onChangeState,
    onEdit, mostrarInputCard, setMostrarInputCard, regaloEditar, handleEditar }) => { //Recibe todos los props 

    //Crea una lista filtrada de los elementos alojados en la listaRegalos original, dependiendo su categoría
    //Si la categoría es All, retorna el elemento como tal, si no, retorna el objeto si su categoría coincide con la seleccionada
    const filterList = listaRegalos.filter(gift => categoria === "All" ? gift : gift.categoria == categoria);

    return (
        <>
            <section className="GiftList">
                {filterList.map(gift => ( //Para cada objeto de la filterList, crea una Card
                    <Card
                        key={gift.id}
                        gift={gift}

                        //Funciones que se le pasarán al menú de opciones
                        onDelete={onDelete}
                        onChangeState={onChangeState}
                        onEdit={onEdit}
                    />
                ))}

                {filterList.length === 0 && ( //Si la lista está vacía, hazlo saber
                    <p>No hay regalos</p>
                )}

                {mostrarInputCard && ( //mostrarInput está activo, entonces muestra el componente
                    <InputCard
                        setMostrarInputCard={setMostrarInputCard}
                        agregarNuevoElemento={agregarNuevoElemento}
                        regaloEditar={regaloEditar}
                        handleEditar={handleEditar}


                    />
                )}

                <ButtonAddElement
                    //Este es el boton que va a permitir almacenar un nuevo objeto
                    setMostrarInputCard={setMostrarInputCard} //Se necesita para mostrar el InputCard cuando se presioné
                >

                </ButtonAddElement>

            </section>


        </>
    );
}

export default GiftList;