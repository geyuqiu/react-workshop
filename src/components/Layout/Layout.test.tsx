import React from "react";
import { render, screen } from '@testing-library/react';
import Layout from "./Layout";

describe('Layout', () => {
    test('renders ', () => {
        render(<Layout />);

        const linkElement = screen.getByText(/Hello Robert/i);

        expect(linkElement).toBeInTheDocument();
    });
});
