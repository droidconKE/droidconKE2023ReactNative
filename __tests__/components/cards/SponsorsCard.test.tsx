import { render } from '@testing-library/react-native';
import SponsorsCard from '../../../components/cards/SponsorsCard';
import { Sponsors } from '../../../mock/sponsors';

describe('SponsorsCard', () => {
  it('renders the component', () => {
    const { getByText } = render(<SponsorsCard sponsors={Sponsors} />);

    const card = getByText('Sponsors');
    expect(card).toBeTruthy();
  });
});
