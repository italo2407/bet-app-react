import React from "react"
import { render, cleanup } from "@testing-library/react"
import EventList from "./index"

afterEach(cleanup)

it("displays initial EvenList", () => {
    const { getByTestId } = render(<EventList />)
    const eventList = getByTestId("eventList")
    expect(eventList.children.length).toBe(2)
});