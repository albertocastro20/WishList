
//Importaciones que vamos a necesitar
import { useState, useEffect } from 'react'
import ButtonsContainer from './components/ButtonsContainer'
import GiftList from './components/GiftsList'
import MensajeFlotante from './components/PopUp'


import { MOCK_REGALOS, CATEGORIES, ESTATUS } from './data/datosPrueba'

import './App.css'

function App() {
  const regalosLS = localStorage.getItem("deseos"); //Obtenemos los datos almacenados en LS
  const regalos = regalosLS ? JSON.parse(regalosLS) : MOCK_REGALOS; //Definimos las constante que tendrá nuestros regalos preestablecidos

  //Definición de los states
  const [listaRegalos, setListaregalos] = useState(regalos); //Tiene la lista de regalos y registra los cambios en ella
  const [categoria, setCategoria] = useState("All"); //Registra que categoría se está mostrando
  const [mostrarInputCard, setMostrarInputCard] = useState(false); //State que registrará si se muestra o no la InputCard
  const [regaloEditar, setRegaloEditar] = useState(null); //State que almacenará el objeto que se va a edutar
  const [mostrarMensaje, setMostrarMensaje] = useState(false); //Maneja el estado del mensaje flotante
  const [estatus, setEstatus] = useState("All"); //Controla el segundo filtro
  const [busqueda, setBusqueda] = useState(""); //Controla la banda de búsqueda

  //Usamos este hook para que se ejecute la función cada que listaRegalos cambie
  useEffect(() => {
    almacenarLS(listaRegalos);
  }, [listaRegalos]);

  function almacenarLS(lista) {
    localStorage.setItem("deseos", JSON.stringify(lista)); //Usamos LS para almacenarlo 
  }


  //Función para agregar un nuevo objeto
  function agregarNuevoElemento(nuevoRegalo) {
    const nuevaListaRegalos = [...listaRegalos, nuevoRegalo]; //Mantenemos todo el array como estaba y solo agregamos el nuevo elemento
    setListaregalos(nuevaListaRegalos);//Y actualizamos el state para que se re-renderice

  }

  //Se usa para eliminar un objeto del array
  function onDelete(regalo) {
    //Recibe el id y busca cual coincide, creando un nuevo arreglo sin el objeto que coindide
    const nuevaListaRegalos = [...listaRegalos.filter(gift => gift.id !== regalo)];
    //Acualiza el state
    setListaregalos(nuevaListaRegalos);
  }

  //Esto cambiará el objeto a un estado en el que ya se "completó"
  function onChangeState(regaloRecibido) {
    //Mapeamos para mantener el arreglo
    const nuevaListaRegalos = listaRegalos.map(regalo => {
      //Con esta condicional  obtenemos el regalo que coincida con el id que viene del boton que se presionó
      if (regalo.id === regaloRecibido) {
        return {
          ...regalo, comprado: !regalo.comprado //Modificamos el "comprado"
        };

      }
      return regalo; //Si no coincide el id, se mantiene el elemento tal como está 
    });

    setListaregalos(nuevaListaRegalos);

  }


  function onEdit(regaloRecibido) {
    /*
    Obtenemos el id del regalo desde el que se presionó el boton de editar
    Extraemos el objeto del arreglo*/
    const regaloAModificar = listaRegalos.find(regalo => regalo.id === regaloRecibido);
    //Actualizamos el regalo para pasarlo como prop mediante un state
    setRegaloEditar(regaloAModificar);

    setMostrarInputCard(true); //Mostramos la InputCard con los valores del regalo
  }

  //Función de editar que trabajará con los states y el almacenamiento del objeto
  function handleEditar(regaloActualizado) { //Este es un objeto de tipo regalo
    const nuevaListaRegalos = listaRegalos.map(regalo => {
      //Buscamos el objeto que coincida con el id del regalo que viene editado
      if (regalo.id === regaloActualizado.id) {
        return regaloActualizado; //Lo almacenamos tal y como está el actualizado
      }

      return regalo; //Si no coincide, se mantiene como está
    })

    setListaregalos(nuevaListaRegalos); //Actuazlizamos la lista

    setRegaloEditar(null); //Vaciamos el regalo que almacenamos en la otra función

  }



  return (
    <>
      <h1>💞 Girlfriend's whishlist 💞</h1>

      <ButtonsContainer
        categorias={CATEGORIES} //Le pasamos las categorías 
        setCategoria={setCategoria} //Le pasamos el set para elegir que categoría está activa
        estatus={estatus}
        setEstatus={setEstatus}

        busqueda={busqueda}
        setBusqueda={setBusqueda}

      />

      <p className='categoriaMostrada'>La categoría mostrada es: {categoria}</p>

      <GiftList
        categoria={categoria} //Pasamos la categoría activa
        estatus={estatus}
        listaRegalos={listaRegalos} //Lista con los regalos
        //Funciones
        agregarNuevoElemento={agregarNuevoElemento}
        onDelete={onDelete}
        onChangeState={onChangeState}
        onEdit={onEdit}
        regaloEditar={regaloEditar} //Regalo obtenido para trabajar con el en InputCard
        handleEditar={handleEditar}

        //Se usan para ver si aparece InputCard
        mostrarInputCard={mostrarInputCard}
        setMostrarInputCard={setMostrarInputCard}

        setMostrarMensaje={setMostrarMensaje}

        busqueda={busqueda}

      />

      {
        mostrarMensaje && ( //Si es true, se muestra el componente del popup
          <MensajeFlotante />
        )
      }


    </>
  );
}

export default App
