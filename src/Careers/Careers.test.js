import React from 'react';
import { render } from '@testing-library/react';
import Careers from './Careers';

test('Render Careers page', () => {
    const { container } = render(
    <Careers/>,
  );
  expect(container.firstChild).toMatchSnapshot();
});