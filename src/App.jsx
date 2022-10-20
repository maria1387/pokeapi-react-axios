import imagen from './assets/img/pokemon-logo.jpg'

import './assets/css/App.css'

import React, { useEffect, useState } from 'react'
import CardPokemon from './components/CardPokemon'
import Search from './components/Search'
function App() {
    //setear los hooks useState
  
  const [listPokemon, setListPokemon]= useState([]);
  const [search, setSearch] = useState("")
  /* Crear referencia sección API */
  // const apiURL =  `https://pokeapi.co/api/v2/pokemon/${id}`
  const apiURL =  `https://pokeapi.co/api/v2/pokemon/`
// console.log(apiURL)
  // /* Crear Función para obtener personajes */
  async function getpokemon(apiURL) {
    const res = await fetch(apiURL)
    const data = await res.json()
    console.log(data)

    }
    useEffect(() => {
      getpokemon(apiURL)

  }, [])

  // const Pokemon =()=>{
  //   nombre: data.name;
  //   img: data.url;
  // }
  return (
    <div className="App">
     <img src={imagen} alt="" />
     <Search/>
     <CardPokemon listPokemon={listPokemon} search={search}/>
    </div>
  )
}

export default App;
