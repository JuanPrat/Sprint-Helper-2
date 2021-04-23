import React from 'react'
import { queryByText, render, screen, } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ListaHistorias from './ListaHistorias'


test('should save to localStorage', () => {
  localStorage.clear();
  localStorage.setItem('hus', JSON.stringify({ codigo: '123', puntos: '5' }))

  render(<ListaHistorias
    codigo={"123"}
    puntos={"5"}
  ></ListaHistorias>);

  expect(screen.getByText('123')).toBeInTheDocument();
});

