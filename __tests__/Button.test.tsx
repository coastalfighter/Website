import { render, screen } from "@testing-library/react";
import { Button } from "@/components/ui/Button";

describe("Button", () => {
  it("renders a link pointing to the given href", () => {
    render(<Button href="/contact">Contact us</Button>);
    const link = screen.getByRole("link", { name: /contact us/i });
    expect(link).toHaveAttribute("href", "/contact");
  });
});
