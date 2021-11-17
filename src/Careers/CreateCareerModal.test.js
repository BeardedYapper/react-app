import React from 'react';
import { render } from '@testing-library/react';
import CreateCareerModal from './CreateCareerModal';

test('Render CreateCareerModal page', () => {
    const { container } = render(
    <CreateCareerModal open={true} handleClose={jest.fn()}/>,
  );
  expect(container.firstChild).toMatchSnapshot();
});