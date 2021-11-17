import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';

test('Render Home page', () => {
  const { container } = render(
    <Router>
    <Home/>
    </Router>,
  );
  expect(container.firstChild).toMatchSnapshot();
});