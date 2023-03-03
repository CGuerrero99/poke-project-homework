
import Card from "./Card";

export default function DisplayPokemons({pokemons}) {



  return (
    <div className="row justify-content-center">
        {pokemons != null ? pokemons.map((pj) => <Card pokemon={pj} />) : <h1>No hay pokemons</h1>}
    </div>
  )
}
