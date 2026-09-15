import { render, screen } from "@testing-library/react";
import { Hero } from "@/components/hero/Hero";
import { heroContent } from "@/data/site";

// jsdom has no WebGL, so Hero should gracefully fall back to the CSS
// gradient background instead of mounting the react-three-fiber <Canvas>.
describe("Hero", () => {
  it("renders the animated headline copy", () => {
    render(<Hero />);

    heroContent.headline
      .join(" ")
      .split(" ")
      .forEach((word) => {
        expect(screen.getAllByText(word).length).toBeGreaterThan(0);
      });
  });

  it("renders primary and secondary calls to action", () => {
    render(<Hero />);

    expect(
      screen.getByRole("link", { name: heroContent.cta.label })
    ).toHaveAttribute("href", heroContent.cta.href);
    expect(
      screen.getByRole("link", { name: heroContent.secondaryCta.label })
    ).toHaveAttribute("href", heroContent.secondaryCta.href);
  });

  it("does not attempt to mount the WebGL canvas when WebGL is unavailable", () => {
    const { container } = render(<Hero />);
    expect(container.querySelector("canvas")).not.toBeInTheDocument();
  });
});
