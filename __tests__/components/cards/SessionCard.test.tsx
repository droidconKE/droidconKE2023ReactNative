import { fireEvent, render, screen } from '@testing-library/react-native';

import SessionCard from '../../../components/cards/SessionCard';

const schedule = {
  id: 122,
  title: 'Registration & Check-In',
  description: 'Registration & Check-In',
  slug: '',
  session_format: '',
  session_level: '',
  session_image: null,
  backgroundColor: '#89609E',
  borderColor: '#89609E',
  is_serviceSession: true,
  is_keynote: false,
  is_bookmarked: true,
  start_date_time: '2022-11-16 08:30:00',
  start_time: '08:30:00',
  end_date_time: '2022-11-16 10:00:00',
  end_time: '10:00:00',
  speakers: [],
  rooms: [
    {
      title: 'Mekatilili',
      id: 1,
    },
  ],
};

const session = {
  title: 'The Apache Way: Doing Community like Apache',
  description:
    'The Apache Way - collaborative, consensus-driven, vendor-neutral\nsoftware development - emphasizes the community over the code, and yet\nhas somehow produced some of the most successful software on the\nplanet, from the Apache web server to Spark, Hadoop, OpenOffice,\nCassandra, Kafka, and many many others. In this talk, I’ll cover what\nthe Apache Way is, and why it’s been so successful over the past 25\nyears.',
  slug: 'the-apache-way-doing-community-like-apache-1668083244',
  session_format: 'Session',
  session_level: 'Intermediate',
  is_keynote: true,
  session_image:
    'https://res.cloudinary.com/droidconke/image/upload/v1668083311/prod/upload/sessions/pwt9pnojtmng8bymxkls.png',
  speakers: [
    {
      name: 'Rich Bowen',
      tagline: 'Principal Evangelist, Open Source at AWS',
      biography:
        "Rich has been working on Open Source since before we called it that.\nHe's a member, and currently serving as a director, at the Apache\nSoftware Foundation. He currently works in the Open Source Strategy and\nMarketing team at AWS as an Open Source Advocate. Rich was born in\nTenwek, and grew up in Kericho and Nairobi before moving to the United\nStates.\n\nI am very excited about getting back to Nairobi. It has been 32 years\n(!!!) since I've been home, and I know that so much has changed. I'm\nlooking forward to seeing home with new eyes.\n\nI was born at Tenwek, down in Bomet, and mostly grew up in Kericho, and\nattended St Andrews School in Turi. We then moved to Nairobi when I was\nin my early teens.",
      avatar:
        'https://res.cloudinary.com/droidconke/image/upload/v1668083245/prod/upload/speakers/bupmjcd4ddtbcbq0yyqn.jpg',
      twitter: 'https://twitter.com/rbowen',
      facebook: 'https://twitter.com/rbowen',
      linkedin: 'https://twitter.com/rbowen',
      instagram: 'https://twitter.com/rbowen',
      blog: 'https://twitter.com/rbowen',
      company_website: 'https://twitter.com/rbowen',
    },
  ],
};

jest.mock('expo-router', () => ({
  useRouter: jest.fn(),
}));

describe('<SessionCard/>', () => {
  const onPress = jest.fn();

  it('renders SessionCard component', () => {
    render(<SessionCard handlePress={onPress} item={session} screen="home" time="2023-08-16" />);
    expect(screen.getByTestId('card')).toBeDefined();
  });

  it('renders session details', () => {
    const { getByText } = render(<SessionCard handlePress={onPress} item={session} screen="home" time="2023-08-16" />);
    expect(getByText('The Apache Way: Doing Community like Apache')).toBeDefined();
  });

  it('fires onPress function when pressed', () => {
    render(<SessionCard handlePress={onPress} item={session} screen="home" time="2023-08-16" />);
    fireEvent.press(screen.getByText('The Apache Way: Doing Community like Apache'));

    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it('renders SessionCardOnSessions when you pass sessions to screen prop', () => {
    render(
      <SessionCard
        screen="sessions"
        handlePress={onPress}
        handleBookMark={onPress}
        item={schedule}
        variant="card"
        time="2023-08-16"
      />,
    );
    expect(screen.getByTestId('card-sessions')).toBeDefined();
  });

  it('renders SessionCardList when you pass sessions and list to screen prop', () => {
    render(
      <SessionCard
        variant="list"
        handleBookMark={onPress}
        screen="sessions"
        handlePress={onPress}
        item={schedule}
        time="2023-08-16"
      />,
    );
    expect(screen.getByTestId('card-list')).toBeDefined();
  });
});
