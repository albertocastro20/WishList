import { useState } from 'react'
import ButtonsContainer from './components/ButtonsContainer'
import GiftList from './components/GiftsList'

import { MOCK_REGALOS, CATEGORIES } from './data/datosPrueba'

import './App.css'

function App() {
  const regalos = MOCK_REGALOS;

  const [listaRegalos, setListaregalos] = useState(regalos);
  const [categoria, setCategoria] = useState("All");



  function agregarNuevoElemento(nuevoRegalo) {
    const nuevaListaRegalos = [...listaRegalos, nuevoRegalo];
    setListaregalos(nuevaListaRegalos);

  }

  function onDelete(regalo) {
    const nuevaListaRegalos = [...listaRegalos.filter(gift => gift.id !== regalo)];
    setListaregalos(nuevaListaRegalos);
  }

  function onChangeState(regaloRecibido) {
    const nuevaListaRegalos = listaRegalos.map(regalo => {
      if (regalo.id === regaloRecibido) {
        return {
          ...regalo, comprado: !regalo.comprado
        };

      }
      return regalo;
    });

    setListaregalos(nuevaListaRegalos);
  }



  function onEdit(regaloRecibido) {
    /*
    Obtenemos el id del regalo desde el que se presionó el boton de editar
    Extraemos el objeto del arreglo*/
    const regaloAModificar = listaRegalos.find(regalo => regalo.id === regaloRecibido);
    console.log(regaloAModificar);

    //Mostramos la InputCard pero con los campos llenados



  }



  return (
    <>
      <h1>Girlfriend's whishlist</h1>

      <ButtonsContainer
        categorias={CATEGORIES}
        setCategoria={setCategoria}
      />

      <p>La categoría mostrada es: {categoria}</p>

      <GiftList
        categoria={categoria}
        listaRegalos={listaRegalos}
        agregarNuevoElemento={agregarNuevoElemento}
        onDelete={onDelete}
        onChangeState={onChangeState}
        onEdit={onEdit}
      />


    </>
  )
}

export default App
