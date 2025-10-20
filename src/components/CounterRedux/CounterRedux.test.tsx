import React from "react";
import { render, screen } from '@testing-library/react';
import CounterRedux from "./CounterRedux";

describe('CounterRedux', () => {
    test('renders ', () => {
        render(<CounterRedux />);

        const linkElement = screen.getByText(/Hello Robert/i);

        expect(linkElement).toBeInTheDocument();
    });
});
