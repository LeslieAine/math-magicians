import renderer from 'react-test-renderer';
import CalculatorLayout from '../components/CalculatorLayout';

it('renders correctly', () => {
  const tree = renderer.create(<CalculatorLayout />).toJSON();
  expect(tree).toMatchSnapshot();
});
