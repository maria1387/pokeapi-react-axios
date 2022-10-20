import { useEffect } from "react";

const CardPokemon = ({search, listPokemon, getpokemon}) => {
	  //metodo de filtrado 2   
    const results = !search ? listPokemon : listPokemon.filter((item)=> dato.name.toLowerCase().includes(search.toLocaleLowerCase()))
  
    // useEffect( ()=> {
    //   getpokemon()
    // }, [])
	return (
		<div>
			<ul>
          {results.length === 0 ? (
            <li>No hay Pokemom 🐸</li>
          ) : (
            results.map((item) => (
              <li key={item.id}>
                <span>
                  <h3> {item.name} </h3>
                
                </span>

              </li>
            ))
          )}
        </ul>
		</div>
	)
};

export default CardPokemon;
