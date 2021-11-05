import { render, screen } from '@testing-library/react';
import App from './App';


test('renders the profile image', () => {
    render(<App />);

    const profileImage = screen.getByRole('img');

    expect(profileImage).toBeInTheDocument();
});
