import paginaUno from "../../../cypress/fixtures/listado-pagina-1.json"
import paginaDos from "../../../cypress/fixtures/listado-pagina-2.json"
import paginaCyn from "../../../cypress/fixtures/listado-pagina-49.json"
import pokedexFixture from "../../__tests__/pokedex.fixture"
import mostrarPaginador from "../paginador"

test("mostrador de pagina", () => {
    document.body.innerHTML = pokedexFixture
    mostrarPaginador(
        964,
        1,
        () => {}
    )
    const $paginador = document.querySelector("#paginador")
    const click = new Event("click")
    $paginador.dispatchEvent(click)
})

test("mosrador de pagina 2", () => {
    document.body.innerHTML = pokedexFixture
    mostrarPaginador(
        964,
        49,
        paginaCyn.next,
        paginaDos.next,
    )
})
