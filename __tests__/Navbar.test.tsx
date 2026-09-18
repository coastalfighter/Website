import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Navbar } from "@/components/layout/Navbar";

describe("Navbar", () => {
  it("renders the logo and primary nav links", () => {
    render(<Navbar />);
    expect(screen.getByLabelText("CMC Group home")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "What We Do" })).toHaveAttribute("href", "/what-we-do");
    expect(screen.getByRole("link", { name: "About" })).toHaveAttribute("href", "/about");
    expect(screen.getByRole("link", { name: "Careers" })).toHaveAttribute("href", "/careers");
    expect(screen.getByRole("link", { name: "Blog" })).toHaveAttribute("href", "/blog");
  });

  it("toggles the mobile menu open and closed", async () => {
    const user = userEvent.setup();
    render(<Navbar />);

    const toggle = screen.getByLabelText("Open menu");
    await user.click(toggle);
    expect(screen.getByLabelText("Close menu")).toBeInTheDocument();
  });
});
