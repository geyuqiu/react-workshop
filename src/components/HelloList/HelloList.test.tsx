import React from "react";
import { render, screen } from '@testing-library/react';
import HelloList from "./HelloList";

describe('HelloList', () => {
    test('renders ', () => {
        render(<HelloList />);

        const linkElement = screen.getByText(/Hello Robert/i);

        expect(linkElement).toBeInTheDocument();
    });
});
