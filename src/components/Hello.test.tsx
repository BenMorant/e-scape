import { render, screen } from '@testing-library/react';
import React from 'react';
import Hello from './Hello';

test('renders Hello World !', () => {
    render(<Hello />);
    const linkElement = screen.getByText(/hello_world/i);
    expect(linkElement).toBeInTheDocument();
});
