import { render, screen, cleanup} from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import CheckoutPage from '../../pages/checkout'
import MainPage from '../../pages/mainpage'
import PizzaCustomisationPage from '../../pages/pizzacustomisation'

test('render mainpage component', async () => {
    render(
        <BrowserRouter>
            <MainPage />
        </BrowserRouter>
    )
})
