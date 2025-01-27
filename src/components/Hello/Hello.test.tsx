import React from "react";
import { render, screen } from '@testing-library/react';
import Hello from "./Hello";

describe('Hello', () => {
    test('renders ', () => {
        render(<Hello />);

        const linkElement = screen.getByText(/Hello World/i);

        expect(linkElement).toBeInTheDocument();
    });

    test('renders ', () => {
        render(<Hello name="Felix"/>);

        const linkElement = screen.getByText(/Hello Felix/i);

        expect(linkElement).toBeInTheDocument();
    });
});
