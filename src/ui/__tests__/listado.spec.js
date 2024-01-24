import { actualizarTextoIndicePokemones, mostrarListadoPokemones } from "../listado";
import listadoFixture from '../../../cypress/fixtures/listado-pagina-1.json';
import pokedexFixture from "../../__tests__/pokedex.fixture";

test("actualizar texto del indice de pokemones", () => {
    document.body.innerHTML = '<div id="indice"></div>'
    actualizarTextoIndicePokemones("cargando...")
    expect(document.querySelector("#indice").textContent)
    .toContain("cargando...")
})

test("mostrar listado de pokemones", () => {
    document.body.innerHTML = pokedexFixture
    const nombresPokemones = listadoFixture.results
    mostrarListadoPokemones(nombresPokemones, () => {})
    expect(document.getElementsByClassName("list-group-item list-group-item-action").length).toBe(20)
})