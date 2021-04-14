import React from 'react'
import { render, fireEvent} from '@testing-library/react'
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

