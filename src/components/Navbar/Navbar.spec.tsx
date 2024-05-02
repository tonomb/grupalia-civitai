import Navbar from "./Navbar";
import { render, screen } from "@testing-library/react";
import { act } from "react";

describe("<Navbar />", () => {
  it("should render Navbar", () => {
    renderComponent();

    expect(screen.getByTestId("navbar")).toBeInTheDocument();
  });
});

function renderComponent() {
  return render(<Navbar />);
}
