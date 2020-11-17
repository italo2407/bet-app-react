import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import BetSlip from "./index";

const mockShowHideBetSlip = jest.fn();

afterEach(cleanup)

it("clicking on close icon", () => {
    const { getByTestId } = render(<BetSlip showHideBetSlip={mockShowHideBetSlip}/>)
    fireEvent.click(getByTestId("closeIcon"))
    expect(mockShowHideBetSlip).toHaveBeenCalled()
});

it("clicking on overlay section", () => {
    const { getByTestId } = render(<BetSlip showHideBetSlip={mockShowHideBetSlip}/>)
    fireEvent.click(getByTestId("overlay"))
    expect(mockShowHideBetSlip).toHaveBeenCalled()
});