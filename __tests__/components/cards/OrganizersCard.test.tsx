import { render } from '@testing-library/react-native';
import OrganizersCard from '../../../components/cards/OrganizersCard';
import { Organizers } from '../../../mock/organizers';

describe('OrganizersCard', () => {
  it('renders the component', () => {
    const { getByText } = render(<OrganizersCard organizers={Organizers} />);

    const card = getByText('Organised by:');
    expect(card).toBeTruthy();
  });
});
