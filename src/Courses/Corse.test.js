import React from 'react';
import { render } from '@testing-library/react';
import Course from './Courses';

test('Render Course page', () => {
    const { container } = render(
    <Course/>,
  );
  expect(container.firstChild).toMatchSnapshot();
});
