import renderer from 'react-test-renderer';
import Nav from '../components/Nav';

it('renders correctly', () => {
  const tree = renderer.create(<Nav />).toJSON();
  expect(tree).toMatchSnapshot();
});
