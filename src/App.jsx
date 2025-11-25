
//Importaciones que vamos a necesitar
import { useState, useEffect } from 'react'
import ButtonsContainer from './components/ButtonsContainer'
import GiftList from './components/GiftsList'
import MensajeFlotante from './components/PopUp'


import { MOCK_REGALOS, CATEGORIES, ESTATUS } from './data/datosPrueba'

import './App.css'

function App() {

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
    //Definimos la función asíncrona dentro del hook
    async function fetchRegalos() {
      try {
        // Petición a la API y espera de la respuesta
        const urlAPIGET = 'https://692437783ad095fb84733298.mockapi.io/api/v1/regalos';
        const response = await fetch(urlAPIGET);

        //  Verificación de si la respuesta HTTP es exitosa 
        if (!response.ok) {
          throw new Error(`Error HTTP! Estado: ${response.status}`);
        }

        // Convierte la respuesta a objeto JSON
        const data = await response.json();

        //  Mapeo de los datos de la API a la estructura de tu regalo
        const regalosAPI = data.map(item => ({
          id: item.id,
          name: item.name,
          comprado: item.comprado,
          descripcion: item.descripcion,
          costo: item.costo, 
          categoria: item.categoria,
          link: item.link,
          imagen: item.imagen
        }));

        //  Actualización del estado exitosa
        setListaRegalos(regalosAPI);
        setError(null);

      } catch (e) {
        // Manejo de errores de red/parsing
        setError("Error al cargar los regalos del servidor.");
        console.error("Error fetching data: ", e);
      } finally {
        // Finaliza el estado de carga, sin importar el resultado
        setLoading(false);
      }
    }

    fetchRegalos();
  }, []);

  // Lógica de renderizado condicional basada en el estado:
  if (loading) return <h1>Cargando regalos...</h1>;
  if (error) return <h1 style={{ color: 'red' }}>¡Error! {error}</h1>;



  //Función para agregar un nuevo objeto
  async function agregarNuevoElemento(nuevoRegalo) {
    try{
      const urlAPIPOST = 'https://692437783ad095fb84733298.mockapi.io/api/v1/regalos'; //Especificamos el endpoint
      const response = await fetch(urlAPIPOST, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(nuevoRegalo)
      });

      if(!response.ok){
        throw new Error(`Error HTTP: ${response.status}`);
      }

      const regaloCreado = await response.json();

      console.log(regaloCreado);
      setListaRegalos(listaRegalos => [...listaRegalos, regaloCreado]); //Actualizamos el state
    }

    catch(error){
      console.error("Error en POST:", error);
    }

  }

  //Se usa para eliminar un objeto del array
  async function onDelete(regalo) {

    const idRegalo = String(regalo)
    try{
      const urlAPIDELETE = 'https://692437783ad095fb84733298.mockapi.io/api/v1/regalos/'+idRegalo;
      const response = await fetch(urlAPIDELETE, {
        method: 'DELETE',
      });

      if(!response.ok){
        throw new Error(`Error HTTP: ${response.status}`);
      }

      const regaloCreado = await response.json();

      setListaRegalos(listaRegalos => listaRegalos.filter(gift => gift.id !== regalo));
    }
    catch(error){
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

    
    
    try{
      const urlAPIPOST = 'https://692437783ad095fb84733298.mockapi.io/api/v1/regalos/'+regaloID;
      const response = await fetch(urlAPIPOST, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(nuevoEstadoRegalo)
      });

      if(!response.ok){
        throw new Error(`Error HTTP: ${response.status}`);
      }
      
      setListaRegalos(listaRegalos =>
         listaRegalos.map(gift =>
           gift.id === regaloID ? nuevoEstadoRegalo : gift));
    }

    catch(error){
      console.error("Error en PUT:", error);
    }

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
  async function handleEditar(regaloActualizado) { //Este es un objeto de tipo regalo
    const idRegalo = String(regaloActualizado.id)
    try{
      const urlAPIPOST = 'https://692437783ad095fb84733298.mockapi.io/api/v1/regalos/'+idRegalo;
      const response = await fetch(urlAPIPOST, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(regaloActualizado)
      });

      if(!response.ok){
        throw new Error(`Error HTTP: ${response.status}`);
      }
      
      setListaRegalos(listaRegalos =>
         listaRegalos.map(gift =>
           gift.id === regaloActualizado.id ? regaloActualizado : gift));
    }

    catch(error){
      console.error("Error en PUT:", error);
    }

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

export default App
