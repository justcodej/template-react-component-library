import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import FileManage from './index';

describe('<FileManage />', () => {
  it('render FileManage with dumi', () => {
    const msg = 'dumi';

    render(<FileManage visible />);
    expect(screen.queryByText(msg)).toBeInTheDocument();
  });
});
