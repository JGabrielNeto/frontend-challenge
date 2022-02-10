import { render, screen } from "@testing-library/react"
import Card from "../src/components/Results/Card"
import InfoIcon from "../src/components/Simulator/InfoIcon"

describe('Cards', () => {
    it('renders a card containing children', () => {
        render(
            <>
                <InfoIcon>infoicon children</InfoIcon>
                <Card>card children</Card>
            </>
            )
        expect(screen.getByText("card children")).toBeInTheDocument()
        expect(screen.getByText("infoicon children")).toBeInTheDocument()
    })

})