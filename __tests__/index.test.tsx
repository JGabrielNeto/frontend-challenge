import { render, screen } from "@testing-library/react"
import Home from "../src/pages"

describe('Home', () => {
    it('renders a header', () => {
        render(<Home />)
        const header = screen.getByText('Simulador de investimentos')
        expect(header).toBeInTheDocument()
    })

})