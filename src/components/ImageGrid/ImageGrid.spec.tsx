import ImageGrid from "./ImageGrid";
import { render, screen } from "@testing-library/react";

describe("<ImageGrid />", () => {
  it("should render the image grid", () => {
    renderComponent();

    expect(screen.getByTestId("imageGrid")).toBeInTheDocument();
  });

  it("should render all images passed in", () => {
    const images = ["mock 1", "mock 2"];
    renderComponent();
  });
});

function renderComponent() {
  return render(<ImageGrid />);
}
