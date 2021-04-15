import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ListaHistorias from './ListaHistorias'

test('should save to localStorage', () => {
    const KEY = 'foo',
      VALUE = 'bar';
    dispatch(action.update(KEY, VALUE));
    expect(localStorage.setItem).toHaveBeenLastCalledWith(KEY, VALUE);
    expect(localStorage.__STORE__[KEY]).toBe(VALUE);
    expect(Object.keys(localStorage.__STORE__).length).toBe(1);
  });