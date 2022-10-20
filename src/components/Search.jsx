

const Search = ({setSearch}) => {
  //setear los hooks useState
  
  const validarDatos =(e) => {
    e.preventDefault();
  }
    const searcher = (e) => {
      setSearch(e.target.value)   
      
  }
 
	return (
		<form onSubmit={validarDatos} >
			<input type="text"  onChange={searcher} placeholder="Nombre"       />
			<button type="submit">BUSCAR</button>
		</form>
	)
};

export default Search;
