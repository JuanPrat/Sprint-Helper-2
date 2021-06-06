import React from 'react'
import { render, fireEvent, queryByTestId, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Formulario from './Formulario'

test('inicializa los valores de los inputs vacios', async () => {
    const { queryByTestId } = render(<Formulario />)
    expect(queryByTestId('input-codigo')).toBeEmptyDOMElement()
    expect(queryByTestId('input-puntos')).toBeEmptyDOMElement()
})

test('inputs cambian de valor a string vacio cuando clickeamos', () => {
    const { queryByTestId } = render(<Formulario />)
    const codigoInput = queryByTestId('input-codigo')
    const puntosInput = queryByTestId('input-puntos')
    const enviarBoton = queryByTestId('enviar-button')

    userEvent.type(codigoInput, "test")
    userEvent.type(puntosInput, "test")
    fireEvent.click(enviarBoton)

    expect(codigoInput).toHaveValue("");
    expect(puntosInput).toHaveValue("");
})

test('imprime los valores ingresados en el formulario', ()=> {
    const { queryByTestId } = render(<Formulario />)

    const codigoInput = queryByTestId('input-codigo')
    const puntosInput = queryByTestId('input-puntos')
    const enviarButton = queryByTestId('enviar-button')

    userEvent.type(codigoInput, "12345")
    userEvent.type(puntosInput, "8")
    fireEvent.click(enviarButton)

    const pCodigo = screen.queryByText("12345")
    const pPuntos = screen.queryByText("Puntos: 8")
    debugger
    expect(pCodigo).toBeTruthy()
    expect(pPuntos).toBeTruthy()
})

