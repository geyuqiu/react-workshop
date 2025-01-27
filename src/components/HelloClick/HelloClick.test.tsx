import React from "react";
import { render, screen } from '@testing-library/react';
import HelloClick from "./HelloClick";

describe('HelloClick', () => {
    test('renders ', () => {
        render(<HelloClick />);

        const linkElement = screen.getByText(/Hello Robert/i);

        expect(linkElement).toBeInTheDocument();
    });
});
