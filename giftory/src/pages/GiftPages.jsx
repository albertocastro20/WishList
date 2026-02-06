
//Importaciones que vamos a necesitar
import { useState, useEffect } from 'react'
import ButtonsContainer from '../components/ButtonsContainer'
import GiftList from '../components/GiftsList'
import MensajeFlotante from '../components/PopUp'
import { regaloService } from '../services/regalos'


import { MOCK_REGALOS, CATEGORIES, ESTATUS } from '../data/datosPrueba'

import '../App.css'

const GiftPage = ({ token, logOut, userLogin }) => {

  //Definición de los states
  //States para hacer el fetch
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [listaRegalos, setListaRegalos] = useState([]); //Tiene la lista de regalos y registra los cambios en ella
  const [categoria, setCategoria] = useState("All"); //Registra que categoría se está mostrando
  const [mostrarInputCard, setMostrarInputCard] = useState(false); //State que registrará si se muestra o no la InputCard
  const [regaloEditar, setRegaloEditar] = useState(null); //State que almacenará el objeto que se va a edutar
  const [mostrarMensaje, setMostrarMensaje] = useState(false); //Maneja el estado del mensaje flotante
  const [estatus, setEstatus] = useState("All"); //Controla el segundo filtro
  const [busqueda, setBusqueda] = useState(""); //Controla la banda de búsqueda

  //Usamos este hook para crear los datos iniciales
  useEffect(() => {
    const cargarRegalos = async () => {
      try {
        const data = await regaloService.getAll(token);
        setListaRegalos(data);
        setError(null)
      } catch (e) {
        setError("No se pudieron cargar los regalos");
      } finally {
        setLoading(false);
      }
    };
    cargarRegalos();
  }, []);


  // Lógica de renderizado condicional basada en el estado:
  if (loading) return <h1>Cargando regalos...</h1>;
  if (error) return <h1 style={{ color: 'red' }}>¡Error! {error}</h1>;



  //Función para agregar un nuevo objeto
  async function agregarNuevoElemento(nuevoRegalo) {
    try {
      const regaloCreado = await regaloService.create(nuevoRegalo, token);
      setListaRegalos(listaRegalos => [...listaRegalos, regaloCreado]); //Actualizamos el state
    }

    catch (error) {
      console.error("Error en POST:", error);
    }
  }

  //Se usa para eliminar un objeto del array
  async function onDelete(idRegalo) {

    try {
      const eliminado = await regaloService.delete(idRegalo, token);

      setListaRegalos(listaRegalos => listaRegalos.filter(gift => gift.id !== idRegalo));
    }
    catch (error) {
      console.error("Error en DELETE:", error);
    }

  }

  function onDeleteAll() {
    const nuevaListaRegalos = [];
    setListaRegalos(nuevaListaRegalos);
  }

  //Esto cambiará el objeto a un estado en el que ya se "completó"
  async function onChangeState(regaloID) {

    const regaloBase = listaRegalos.find(gift => gift.id === regaloID);
    const nuevoEstadoRegalo = {
      ...regaloBase, comprado: !regaloBase.comprado
    };

    try {
      const regaloEditado = await regaloService.update(regaloID, nuevoEstadoRegalo, token);

      setListaRegalos(listaRegalos =>
        listaRegalos.map(gift =>
          gift.id === regaloID ? nuevoEstadoRegalo : gift));
    }

    catch (error) {
      console.error("Error en PUT:", error);
    }

  }


  //Funcion que sirve para editar un Gift
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
  async function handleEditar(regaloActualizado) { //Este es un objeto de tipo regalo
    try {
      const regaloEditado = await regaloService.update(regaloActualizado.id, regaloActualizado, token)

      setListaRegalos(listaRegalos =>
        listaRegalos.map(gift =>
          gift.id === regaloActualizado.id ? regaloActualizado : gift));
    }

    catch (error) {
      console.error("Error en PUT:", error);
    }

    setRegaloEditar(null); //Vaciamos el regalo que almacenamos en la otra función

  }

  return (
    <>
      <div className='cabecera'>
        <h1>💞 Giftory: Wishlist💞</h1>
        <div className='infoUser'>
          <h3 className='saludo'>Hi {userLogin}</h3>
          <button
            className='logoutButton'
            onClick={logOut}
          >
            Log out
          </button>
        </div>

      </div>


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
        onDeleteAll={onDeleteAll}

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

export default GiftPage;
