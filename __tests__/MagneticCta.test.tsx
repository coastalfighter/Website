import { render, screen } from "@testing-library/react";
import { MagneticCta } from "@/components/hero/MagneticCta";

describe("MagneticCta", () => {
  it("renders as a link pointing to the given href", () => {
    render(<MagneticCta href="/contact">Start a Conversation</MagneticCta>);

    const link = screen.getByRole("link", { name: /start a conversation/i });
    expect(link).toHaveAttribute("href", "/contact");
  });

  it("applies primary styling by default and secondary when requested", () => {
    const { rerender } = render(<MagneticCta href="/contact">Primary</MagneticCta>);
    expect(screen.getByRole("link", { name: "Primary" })).toHaveClass("bg-paper");

    rerender(
      <MagneticCta href="/contact" variant="secondary">
        Secondary
      </MagneticCta>
    );
    expect(screen.getByRole("link", { name: "Secondary" })).toHaveClass("border");
  });
});
