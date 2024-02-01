import paginaUno from "../../../cypress/fixtures/listado-pagina-1.json"
import paginaDos from "../../../cypress/fixtures/listado-pagina-2.json"
import paginaCyn from "../../../cypress/fixtures/listado-pagina-49.json"
import pokedexFixture from "../../__tests__/pokedex.fixture"
import mostrarPaginador from "../paginador.js"
import { manejarCambioPagina } from "../paginador.js"

test("mostrador de pagina 1", () => {
    document.body.innerHTML = pokedexFixture
    const callbackPaginaSeleccionada = jest.fn()
    mostrarPaginador(
        964,
        1,
        paginaUno.next,
        paginaUno.previous,
        callbackPaginaSeleccionada,
    )
    const $paginador = document.querySelector("#paginador")
    const click = new Event("click")
    $paginador.dispatchEvent(click)
    expect(document.querySelectorAll("li")[0].className).toBe("page-item disabled")
    expect(document.querySelectorAll("li")[50].className).toBe("page-item")
    expect(callbackPaginaSeleccionada).toHaveBeenCalled()
})

test("mostrador de pagina 2", () => {
    document.body.innerHTML = pokedexFixture
    mostrarPaginador(
        964,
        2,
        paginaDos.next,
        paginaDos.previous,
    )
    expect(document.querySelectorAll("li")[0].className).toBe("page-item")
    expect(document.querySelectorAll("li")[50].className).toBe("page-item")
})

test("mostrador de pagina 49", () => {
    document.body.innerHTML = pokedexFixture
    mostrarPaginador(
        964,
        49,
        paginaCyn.next,
        paginaCyn.previous,
    )
    expect(document.querySelectorAll("li")[0].className).toBe("page-item")
    expect(document.querySelectorAll("li")[50].className).toBe("page-item disabled")
})

test('manejarCambioPagina llama a callbackPaginaSeleccionada', () => {
    const callbackPaginaSeleccionadaMock = jest.fn();
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

  test('manejarCambioPagina llama a callbackPaginaSeleccionada', () => {
    const eventoMock = {
      preventDefault: jest.fn(),
      target: {
        getAttribute: jest.fn(() => '#'),
        dataset: { pagina: '2' },
      },
    };
  
    manejarCambioPagina(eventoMock);

    expect(eventoMock.preventDefault).toHaveBeenCalled();
  });
