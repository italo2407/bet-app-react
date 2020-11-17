import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import Header from "./index";

afterEach(cleanup)

it('should display BetSlip', () => {
    const { getByTestId } = render(<Header />)
    fireEvent.click(getByTestId("menu"))
    expect(getByTestId("betSlip")).toBeInTheDocument()
})