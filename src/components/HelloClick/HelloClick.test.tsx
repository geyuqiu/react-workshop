import React from "react";
import { fireEvent, render, screen } from '@testing-library/react';
import HelloClick from "./HelloClick";

describe('HelloClick', () => {
    test('renders ', () => {
        render(<HelloClick />);
        const trigger = screen.getByRole('button');
        fireEvent.click(trigger);
        expect(screen.getByTestId('button-clicked')).toHaveTextContent('Hello button!');

        fireEvent.click(trigger);
        expect(screen.getByTestId('button-clicked')).toHaveTextContent('Hello World!');
    });
});
