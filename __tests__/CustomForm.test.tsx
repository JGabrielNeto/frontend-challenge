import { render, screen } from "@testing-library/react"
import CustomForm from "../src/components/Simulator/CustomForm"
describe('Form', () => {
    it('contains all inputs rendered', () => {
        render(<CustomForm/>)
        expect(screen.getByText("Aporte Inicial")).toBeInTheDocument()
        expect(screen.getByText("Aporte Mensal")).toBeInTheDocument()
        expect(screen.getByText("Prazo (em meses)")).toBeInTheDocument()
        expect(screen.getByText("Rentabilidade")).toBeInTheDocument()
        expect(screen.getByText("IPCA (ao ano)")).toBeInTheDocument()
        expect(screen.getByText("CDI (ao ano)")).toBeInTheDocument()
    })

})