import { render, screen } from '@testing-library/react';
import Hello from './Hello';

test('renders Hello World !', () => {
    render(<Hello />);
    const linkElement = screen.getByText(/Hello World !/i);
    expect(linkElement).toBeInTheDocument();
});
