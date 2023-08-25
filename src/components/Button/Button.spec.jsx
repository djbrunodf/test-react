import { render, screen } from '@testing-library/react';
import { Button } from '.';
import userEvent from '@testing-library/user-event';

describe('<Button />', () => {
  it('should render the button with the text', () => {
    const fn = jest.fn();
    render(<Button text="Load more posts" disabled={false} botao={fn} />);
    expect.assertions(1);

    const button = screen.getByRole('button', { name: /load more posts/i });
    expect(button).toBeInTheDocument();
  });

  it('should call function on button click', () => {
    const fn = jest.fn();
    render(<Button text="Load more posts" disabled={false} botao={fn} />);

    const button = screen.getByRole('button', { name: /load more posts/i });

    userEvent.click(button);

    expect(fn).toHaveBeenCalled();
  });

  it('should be disabled when disabled is true', () => {
    const fn = jest.fn();
    render(<Button text="Load more posts" disabled={true} botao={fn} />);

    const button = screen.getByRole('button', { name: /load more posts/i });

    expect(button).toBeDisabled();
  });

  it('should be enabled when disabled is false', () => {
    const fn = jest.fn();
    render(<Button text="Load more posts" disabled={false} botao={fn} />);

    const button = screen.getByRole('button', { name: /load more posts/i });

    expect(button).toBeEnabled();
  });

  it('should match snapshot', () => {
    const fn = jest.fn();
    const { container } = render(<Button text="Load more posts" disabled={false} botao={fn} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
