import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import PageNotFound from '../../pages/pagenotfound'

test('render mainpage component', async () => {
    render(
        <BrowserRouter>
            <PageNotFound />
        </BrowserRouter>
    )
})

