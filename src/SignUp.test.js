import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import SignUp from './SignUp';

test('Render SignUp page', () => {
  const { container } = render(
    <Router><SignUp/></Router>,
  );
  expect(container.firstChild).toMatchSnapshot();
});