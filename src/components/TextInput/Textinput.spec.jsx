import { render, screen } from '@testing-library/react';
import { TextInput } from '.';
import userEvent from '@testing-library/user-event';

describe('<Posts />', () => {
  it('should have a value of searchvalue', () => {
    const fn = jest.fn();
    render(<TextInput handleChange={fn} searchValue={'testando'} />);

    const input = screen.getByPlaceholderText(/type your search/i);
    expect(input.value).toBe('testando');
  });

  it('should call handleChange function on each key pressed', () => {
    const fn = jest.fn();
    render(<TextInput handleChange={fn} searchValue={'testando'} />);

    const input = screen.getByPlaceholderText(/type your search/i);

    userEvent.type(input, input.value);

    expect(input.value).toBe(input.value);
    expect(fn).toHaveBeenCalledTimes(input.value.length);
  });

  it('should match snapshot', () => {
    const fn = jest.fn();
    const { container } = render(<TextInput handleChange={fn} searchValue={'testando'} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
