import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FaqAccordion } from "@/components/ui/FaqAccordion";

const items = [
  { question: "First question?", answer: "First answer." },
  { question: "Second question?", answer: "Second answer." },
];

describe("FaqAccordion", () => {
  it("opens the first item by default and toggles others on click", async () => {
    const user = userEvent.setup();
    render(<FaqAccordion items={items} />);

    expect(screen.getByText("First answer.")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /second question/i }));
    expect(await screen.findByText("Second answer.")).toBeInTheDocument();
  });
});
