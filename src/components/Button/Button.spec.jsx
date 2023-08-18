import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { Button } from ".";

describe('<Button />', () => {
    it('should render the button with the text', () => {
        render(<Button text="Load more" />);
        

        const button = screen.getByRole('button', { name: /load more/i });
        expect(button).toBeInTheDocument();
    })
})  