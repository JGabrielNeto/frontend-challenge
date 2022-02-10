import { render, screen } from "@testing-library/react"
import CustomRadioIncome from "../src/components/Simulator/CustomRadioIncome"
import CustomRadioIndexing from "../src/components/Simulator/CustomRadioIndexing"

describe('Radioes', () => {
    it('renders all the needed radios', () => {
        render(
            <>
                <CustomRadioIncome />
                <CustomRadioIndexing />
            </>
        )
        expect(screen.getByText("PRÉ")).toBeInTheDocument()
        expect(screen.getByText("PÓS")).toBeInTheDocument()
        expect(screen.getByText("FIXADO")).toBeInTheDocument()
        expect(screen.getByText("Bruto")).toBeInTheDocument()
        expect(screen.getByText("Líquido")).toBeInTheDocument()
    })

})