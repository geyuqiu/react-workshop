import React from "react";
import { render, screen } from '@testing-library/react';
import Weather from "./Weather";

describe('Weather', () => {
    test('renders ', async () => {
        const mockTemperature = {
            main: {
                temp: 25
            }
        };

        global.fetch = jest.fn().mockResolvedValue({
            json: jest.fn().mockResolvedValue(mockTemperature)
        })

        render(<Weather />);

        expect(await screen.findByText('aktuelle Temperatur: 25'))
            .toBeInTheDocument();
    });
});
