import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders learn react link', () => {
    expect(render(<App/>)).toBeTruthy();
  });
})
