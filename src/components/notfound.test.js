import React from 'react';
import {render, screen} from '@testing-library/react';
import {BrowserRouter} from "react-router-dom";
import NotFound from "./notFound";

test('renders home page', () => {
    render(
        <BrowserRouter>
            <NotFound/>
        </BrowserRouter>
    );

    const element = screen.getByText(/Not Found/i)
    expect(element).toBeInTheDocument();
});
