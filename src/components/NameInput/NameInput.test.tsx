import React from "react";
import { fireEvent, render, screen } from '@testing-library/react';
import NameInput from "./NameInput";

describe('NameInput', () => {
    test('renders ', () => {
        const setNameMock = jest.fn();
        const newName = 'newName';
        render(<NameInput name="" setName={setNameMock} />);
        const nameInputElement = screen.getByRole('name-input');

        fireEvent.change(nameInputElement, { target: { value: newName } });

        expect(setNameMock).toHaveBeenCalledWith(newName);
    });
});
