import React from "react";
import { render, screen } from '@testing-library/react';
import HelloList from "./HelloList";

describe('HelloList', () => {
    test('renders ', () => {
        render(<HelloList />);

        const linkElements = screen.getAllByTestId('hello-list');

        expect(linkElements.length).toEqual(3);
    });
});
