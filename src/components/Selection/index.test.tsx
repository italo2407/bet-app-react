import React from "react"
import { render, fireEvent, cleanup } from "@testing-library/react"
import Selection from "./index"
import { AppProvider } from "../../context"

const selection = {
    "id": "SEL_1",
    "name": "Real Madrid",
    "price": 1.23
}

afterEach(cleanup)

it("select Selection", () => {
    const { getByTestId } = render(<AppProvider><Selection selection={selection}/></AppProvider>)
    fireEvent.click(getByTestId("selection"))
    expect(getByTestId("selection")).toHaveClass('bg-blue-600 py-2 px-6 rounded-lg grid text-xs')
});
