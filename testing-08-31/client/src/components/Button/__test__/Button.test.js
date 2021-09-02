import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../Button';

import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

test('Button render successfully', () => {
  const { getByTestId } = render(
    <Button text="Click me" action={() => console.log('hello')} />
  );

  expect(getByTestId('btn')).toHaveTextContent('Click me');
});
