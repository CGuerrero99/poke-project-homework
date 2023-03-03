import { useContext, useEffect } from "react"
import { AppContext } from "../../services/provider"

export default function Navbar({title}) {
    const [pokemons, setPokemons] = useContext(AppContext)

    useEffect( () => {
      console.log(pokemons);
    })


  return (
    <div>
        <nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <span class="navbar-brand mb-0 h1">{title}</span>
  </div>
</nav>
       
    </div>
  )
}
