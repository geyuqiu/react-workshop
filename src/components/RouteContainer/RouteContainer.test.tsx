import React from "react";
import { render, screen } from '@testing-library/react';
import RouteContainer from "./RouteContainer";

describe('RouteContainer', () => {
    test('renders ', () => {
        render(<RouteContainer />);

        const linkElement = screen.getByText(/Hello Robert/i);

        expect(linkElement).toBeInTheDocument();
    });
});
