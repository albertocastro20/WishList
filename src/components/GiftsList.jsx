import Card from "./Card";
import ButtonAddElement from "./AddElementButton";
import InputCard from "./InputCard";

const GiftList = ({ categoria, listaRegalos, agregarNuevoElemento, onDelete, onChangeState,
    onEdit, mostrarInputCard, setMostrarInputCard, regaloEditar, handleEditar, setMostrarMensaje }) => { //Recibe todos los props 

    //Crea una lista filtrada de los elementos alojados en la listaRegalos original, dependiendo su categoría
    //Si la categoría es All, retorna el elemento como tal, si no, retorna el objeto si su categoría coincide con la seleccionada
    const filterList = listaRegalos.filter(gift => categoria === "All" ? gift : gift.categoria == categoria);
    const filterCompletedList = listaRegalos.filter(gift => gift.comprado);

    //Manejo de las cadenas de texto
    const wishNounCompleted = filterCompletedList.length !== 1 ? "deseos": "deseo";
    const wishNoun = filterList.length !== 1 ? "deseos": "deseo";
    

    return (

        <>
            {filterList.length === 0 && ( //Si la lista está vacía, hazlo saber
                <p className="pContador">Desea algo para comenzar</p>
            )}

            {filterList.length > 0 && ( //Si no está vacía, muestra este mensaje
                <>
                <p className="pContador">Hay {filterList.length} {wishNoun} pendientes /// Le has cumplido {filterCompletedList.length} {wishNounCompleted}</p>
                </>
            )}

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

                {mostrarInputCard && ( //mostrarInput está activo, entonces muestra el componente
                    <InputCard
                        setMostrarInputCard={setMostrarInputCard}
                        agregarNuevoElemento={agregarNuevoElemento}
                        regaloEditar={regaloEditar}
                        handleEditar={handleEditar}
                        categoriaSeleccionada={categoria}
                        setMostrarMensaje={setMostrarMensaje}
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