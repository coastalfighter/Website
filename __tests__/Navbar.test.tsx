import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Navbar } from "@/components/layout/Navbar";
import { navLinks } from "@/data/site";

describe("Navbar", () => {
  it("renders the logo and all primary nav links", () => {
    render(<Navbar />);

    expect(screen.getByRole("link", { name: /home$/i })).toBeInTheDocument();
    navLinks.forEach((link) => {
      expect(screen.getAllByRole("link", { name: link.label }).length).toBeGreaterThan(0);
    });
  });

  it("toggles the mobile menu when the hamburger button is clicked", async () => {
    const user = userEvent.setup();
    render(<Navbar />);

    const toggle = screen.getByRole("button", { name: /open menu/i });
    expect(toggle).toHaveAttribute("aria-expanded", "false");

    await user.click(toggle);
    expect(screen.getByRole("button", { name: /close menu/i })).toHaveAttribute(
      "aria-expanded",
      "true"
    );
  });
});
