import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import LogIn from './LogIn';

test('Render LogIn page', () => {
  const { container } = render(
    <Router>
    <LogIn/>
    </Router>,
  );
  expect(container.firstChild).toMatchSnapshot();
});