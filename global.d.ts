import '@react-navigation/native';

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
      bg: string;
      background: string;
      text: string;
      border: string;
      card: string;
      notification: string;
    };
  };
  export function useTheme(): ExtendedTheme;
}

export interface IFeed {
  data: Array<{
    title: string;
    body: string;
    topic: string;
    url: string;
    image: string;
    created_at: string;
  }>;
  meta: Meta;
}

export interface IOrganizers {
  data: Array<{
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
  }>;
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
  session_image: null | string;
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

export interface ISponsors {
  data: Array<{
    name: string;
    tagline: string;
    link: string;
    sponsor_type: string;
    logo: string;
    created_at: string;
  }>;
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
