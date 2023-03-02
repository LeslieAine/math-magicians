import renderer, { act } from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { fireEvent } from '@testing-library/dom';
import '@testing-library/jest-dom/extend-expect';
import Calculator from '../components/Calculator';

describe('Calculator', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('The user types 4 + 2', async () => {
    render(<Calculator />);
    const display = screen.getByTestId('display');
    expect(display).toHaveTextContent('0');

    act(() => {
      fireEvent.click(screen.getByText('4'));
    });
    expect(display).toHaveTextContent('4');

    act(() => {
      fireEvent.click(screen.getByText('+'));
    });
    expect(display).toHaveTextContent('4');

    act(() => {
      fireEvent.click(screen.getByText('2'));
    });
    expect(display).toHaveTextContent('2');

    act(() => {
      fireEvent.click(screen.getByText('='));
    });
    expect(display).toHaveTextContent('6');
  });

  it('The user tries to divide by zero', async () => {
    render(<Calculator />);
    const display = screen.getByTestId('display');
    expect(display).toHaveTextContent('0');

    act(() => {
      fireEvent.click(screen.getByText('4'));
    });
    expect(display).toHaveTextContent('4');

    act(() => {
      fireEvent.click(screen.getByText('÷'));
    });
    expect(display).toHaveTextContent('4');

    act(() => {
      fireEvent.click(screen.getByText('0'));
    });
    expect(display).toHaveTextContent('0');

    act(() => {
      fireEvent.click(screen.getByText('='));
    });
    expect(display).toHaveTextContent("Can't divide by 0.");
  });
});
