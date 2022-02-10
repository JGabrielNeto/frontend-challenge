import { render, screen } from "@testing-library/react"
import Results from "../src/components/Results/Results"

describe('Results', () => {
    it('is  empty when pages loads', () => {
        render(<Results/>)
        expect(screen).toBeEmptyDOMElement
    })

})