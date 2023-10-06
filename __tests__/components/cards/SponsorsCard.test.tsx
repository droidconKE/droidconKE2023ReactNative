import { render } from '@testing-library/react-native';
import SponsorsCard from '../../../components/cards/SponsorsCard';

describe('SponsorsCard', () => {
  it('renders the component', () => {
    const { getByText } = render(<SponsorsCard />);

    const card = getByText('Sponsors');
    expect(card).toBeTruthy();
  });
});
