import paginaUno from "../../../cypress/fixtures/listado-pagina-1.json"
import paginaDos from "../../../cypress/fixtures/listado-pagina-2.json"
import paginaCyn from "../../../cypress/fixtures/listado-pagina-49.json"
import pokedexFixture from "../../__tests__/pokedex.fixture"
import mostrarPaginador from "../paginador"
import { manejarCambioPagina } from "../paginador"

test("mostrador de pagina 1", () => {
    document.body.innerHTML = pokedexFixture
    mostrarPaginador(
        964,
        1,
        paginaUno.next,
        paginaUno.previous,
        () => {}
    )
    const $paginador = document.querySelector("#paginador")
    const click = new Event("click")
    $paginador.dispatchEvent(click)
})

test("mostrador de pagina 2", () => {
    document.body.innerHTML = pokedexFixture
    mostrarPaginador(
        964,
        2,
        paginaDos.next,
        paginaDos.previous
    )
})

test("mostrador de pagina 49", () => {
    document.body.innerHTML = pokedexFixture
    mostrarPaginador(
        964,
        49,
        paginaCyn.next,
        paginaCyn.previous
    )
})

test("manejar el cambio de pagina", () => {
    const callbackPaginaSeleccionadaMock = jest.fn()
    const eventoMock = {
        preventDefault: jest.fn(),
        target: {
          getAttribute: jest.fn(() => '#'),
          dataset: { pagina: '2' },
        },
      };
    
      manejarCambioPagina(eventoMock, callbackPaginaSeleccionadaMock);
    
      expect(eventoMock.preventDefault).toHaveBeenCalled();
      expect(callbackPaginaSeleccionadaMock).toHaveBeenCalledWith(2);
    });
