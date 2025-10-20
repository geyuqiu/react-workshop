import React from "react";
import { render, screen } from '@testing-library/react';
import Weather from "./Weather";

describe('Weather', () => {
    test('renders ', () => {
        render(<Weather />);

        const linkElement = screen.getByText(/Hello Robert/i);

        expect(linkElement).toBeInTheDocument();
    });
});
