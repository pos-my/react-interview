import React from 'react';
import {render, screen} from '@testing-library/react';
import Thankyou from "./thankyou";
import {BrowserRouter} from "react-router-dom";

test('renders home page', () => {
    render(
        <BrowserRouter>
            <Thankyou/>
        </BrowserRouter>
    );

    const element = screen.getByText(/Thank you for ordering Pizza!/i)
    expect(element).toBeInTheDocument();
});
