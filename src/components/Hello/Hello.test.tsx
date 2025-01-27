import React from "react";
import { render, screen } from '@testing-library/react';
import Hello from "./Hello";

describe('Hello', () => {
    test('renders ', () => {
        render(<Hello />);

        const linkElement = screen.getByText(/Hello Robert/i);

        expect(linkElement).toBeInTheDocument();
    });
});
