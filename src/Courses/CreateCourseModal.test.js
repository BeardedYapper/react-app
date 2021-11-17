import React from 'react';
import { render } from '@testing-library/react';
import CreateCourseModal from './CreateCourseModal';

test('Render CreateCourseModal page', () => {
    const { container } = render(
    <CreateCourseModal open={true} handleClose={jest.fn()}/>,
  );
  expect(container.firstChild).toMatchSnapshot();
});