import React from "react";
import { render, screen } from '@testing-library/react';
import Home from "./Home";

describe('Home', () => {
    test('renders ', () => {
        render(<Home />);

        const linkElement = screen.getByText(/Hello Robert/i);

        expect(linkElement).toBeInTheDocument();
    });
});
