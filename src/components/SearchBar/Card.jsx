import { useEffect, useState } from "react"
import axios from "axios";

export default function Card({pokemon}) {

    const [onePokemon, setOnePokemon] = useState({
        name: "",
        sprites: {front_default: ""}

    })


    useEffect( () => {
        getPokemon(pokemon.url)
    })

    const getPokemon = (url) =>{
        axios.get(url)
        .then((response) => {
            //console.log(response);
            setOnePokemon(response.data)

        })


    }


  return (
    <div class="card m-2 text-center" style={{width: '18rem'}}>
             <img src={onePokemon.sprites.front_default} class="card-img-top" alt="..."/>
        <div class="card-body">
              <h5 class="card-title">{onePokemon.name}</h5>
             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
    </div>
  )
}
