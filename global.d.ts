import '@react-navigation/native';
import type { SvgProps } from 'react-native-svg';

declare module '@react-navigation/native' {
  export type ExtendedTheme = {
    dark: boolean;
    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
      accent: string;
      textLight: string;
      tint: string;
      secondaryTint: string;
      tertiaryTint: string;
      modalTint: string;
      link: string;
      bg: string;
      background: string;
      text: string;
      border: string;
      card: string;
      notification: string;
      bgInverse: string;
      whiteConstant: string;
      iconSwitch: string;
      placeHolder: string;
      borderColor: string;
      assetAccent: string;
    };
  };

  export type ThemeColors = {
    [key in 'light' | 'dark']: Omit<ExtendedTheme['colors'], 'text' | 'border' | 'notification'>;
  };
  export function useTheme(): ExtendedTheme;
}

type Montserrat = {
  bold: string;
  regular: string;
  medium: string;
  semiBold: string;
  light: string;
};
type Roboto = {
  medium: string;
};
type Rubik = {
  light: string;
};

export type Fonts = {
  montserrat: Montserrat;
  roboto: Roboto;
  rubik: Rubik;
};

export type Typography = {
  primary: Montserrat;
  secondary: Roboto;
  logo: Rubik;
};

export interface IFeed {
  data: Array<Feed>;
  meta: Meta;
}

export interface IOrganizer {
  id: number;
  name: string;
  email: string;
  description: string;
  facebook: string;
  twitter: string;
  instagram: null | string;
  logo: string;
  slug: string;
  status: string;
  created_at: string;
  upcoming_events_count: number;
  total_events_count: number;
}

export interface IOrganizers {
  data: Array<IOrganizer>;
  meta: Meta;
}

export interface ISchedule {
  data: {
    [key: string]: Array<SessionForSchedule>;
  };
}

export interface Session {
  title: string;
  description: string;
  slug: string;
  session_format: string;
  session_level: string;
  is_keynote: boolean;
  session_image: string | null;
  speakers: Array<Speaker>;
}

export interface Room {
  title: string;
  id: number;
}

export interface SessionForSchedule extends Session {
  id: number;
  backgroundColor: string;
  borderColor: string;
  is_serviceSession: boolean;
  is_bookmarked: boolean;
  start_date_time: string;
  start_time: string;
  end_date_time: string;
  end_time: string;
  rooms: Array<Room>;
}

export interface ISessions {
  data: Array<Session>;
  meta: Meta;
}

export interface Speaker {
  name: string;
  tagline: string;
  biography: string;
  avatar: string;
  twitter: null | string;
  facebook: null | string;
  linkedin: null | string;
  instagram: null | string;
  blog: null | string;
  company_website: null | string;
}

export interface ISpeaker {
  data: Array<Speaker>;
  meta: Meta;
}

export interface ISponsor {
  name: string;
  tagline: string;
  link: string;
  sponsor_type: string;
  logo: string;
  created_at: string;
}

export interface ISponsors {
  data: Array<ISponsor>;
}

export interface Meta {
  paginator: Paginator;
}

export interface Paginator {
  count: number;
  per_page: string;
  current_page: number;
  next_page: string | null;
  has_more_pages: boolean;
  next_page_url: string | null;
  previous_page_url: string | null;
}

export interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}

export interface IDateForDayButton {
  day: string;
  date: string;
  key: string;
}

export type OrganizingTeamMember = {
  name: string;
  tagline: string;
  link: string;
  type: string;
  bio: string;
  twitter_handle: string;
  designation: string;
  photo: string;
  created_at: string;
};
export interface IOrganizingTeam {
  data: Array<OrganizingTeamMember>;
}
