import type { UseQueryOptions } from '@tanstack/react-query';
import { useQueries } from '@tanstack/react-query';
import { EVENT_SLUG, ORG_SLUG } from '../../config/constants';
import type {
  IFeed,
  IOrganizers,
  IOrganizingTeam,
  ISchedule,
  ISessions,
  ISpeaker,
  ISponsors,
  ScheduleSession,
} from '../../global';
import { axiosInstance } from './axios';
import { queryClient } from './react-query';

export const getSessions = async (count: number) => {
  const { data } = await axiosInstance.get<ISessions>(`/events/${EVENT_SLUG}/sessions`, {
    params: { per_page: count },
  });
  return data;
};

export const getSpeakers = async (count: number) => {
  const { data } = await axiosInstance.get<ISpeaker>(`/events/${EVENT_SLUG}/speakers`, {
    params: { per_page: count },
  });
  return data;
};

export const getSponsors = async () => {
  const { data } = await axiosInstance.get<ISponsors>(`/events/${EVENT_SLUG}/sponsors`);
  return data;
};

export const getOrganizers = async () => {
  const { data } = await axiosInstance.get<IOrganizers>(`/organizers`);
  return data;
};

export const getOrganizingTeam = async () => {
  const { data } = await axiosInstance.get<IOrganizingTeam>(`/organizers/${ORG_SLUG}/team`);
  return data;
};

export const getEventFeed = async () => {
  const { data } = await axiosInstance.get<IFeed>(`/events/${EVENT_SLUG}/feeds`);
  return data;
};

export const getEventSchedule = async () => {
  const { data } = await axiosInstance.get<ISchedule>(`/events/${EVENT_SLUG}/schedule`, {
    params: { grouped: true },
  });
  return data;
};

export const sendFeedback = async (feedback: string, rating: number) => {
  const _feedback = { feedback, rating };
  const res = await axiosInstance.post(`/events/${EVENT_SLUG}/feedback`, _feedback);
  return res;
};

export const getSessionBySlug = async (slug: string | undefined) => {
  if (typeof slug === 'undefined') return null;
  const { data } = await axiosInstance.get<ScheduleSession>(`/events/${EVENT_SLUG}/sessions/${slug}`);
  return data;
};

const _queries = [
  {
    queryKey: ['sessions', 50],
    queryFn: () => getSessions(50),
  },
  {
    queryKey: ['speakers', 50],
    queryFn: () => getSpeakers(50),
  },
  {
    queryKey: ['sponsors'],
    queryFn: () => getSponsors(),
  },
  {
    queryKey: ['organizers'],
    queryFn: () => getOrganizers(),
  },
  {
    queryKey: ['schedule'],
    queryFn: () => getEventSchedule(),
  },
  {
    queryKey: ['organizingTeam'],
    queryFn: () => getOrganizingTeam(),
  },
] as const;

export const prefetchEvent = async () => {
  _queries.forEach(async (query) => {
    await queryClient.prefetchQuery(
      query as UseQueryOptions<ISessions | ISpeaker | ISponsors | IOrganizers | ISchedule | IOrganizingTeam>,
    );
  });
};

export const usePrefetchedEventData = () => {
  const queries = useQueries({
    queries: _queries,
  });

  const _isLoading = queries.map((query) => query.isLoading).some((isLoading) => isLoading);
  const _isRefetching = queries.map((query) => query.isRefetching).some((isRefetching) => isRefetching);

  const refetch = async () => Promise.all(queries.map((query) => query.refetch()));

  const sessions = queries[0]?.data;
  const speakers = queries[1]?.data;
  const sponsors = queries[2]?.data;
  const organizers = queries[3]?.data;
  const schedule = queries[4]?.data;
  const organizingTeam = queries[5]?.data;

  return {
    sessions,
    speakers,
    sponsors,
    organizers,
    schedule,
    organizingTeam,
    isLoading: _isLoading,
    isRefetching: _isRefetching,
    refetch,
  };
};
