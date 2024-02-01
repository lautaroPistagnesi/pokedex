import mostrarPokemon from "../pokemon";
import bulbasaur from "../../../cypress/fixtures/bulbasaur.json"
import pokedexFixture from "../../__tests__/pokedex.fixture";

test("mostrar pokemon", () => {
    document.body.innerHTML = pokedexFixture
    const pokemon = {
        id:bulbasaur.id,
        nombre:bulbasaur.name,
        foto:bulbasaur.sprites.front_default,
        tipos:bulbasaur.types,
        habilidades:bulbasaur.abilities,
        movimientos:bulbasaur.moves,
    }
    
})