import type { UseQueryOptions } from '@tanstack/react-query';
import { useQueries } from '@tanstack/react-query';
import { EVENT_SLUG, ORG_SLUG } from '../../config/constants';
import type { IOrganizers, ISessions, ISpeaker, ISponsors } from '../../global';
import { axiosInstance } from './axios';
import { queryClient } from './react-query';

export const getSessions = async (count: number) => {
  const { data } = await axiosInstance.get(`/events/${EVENT_SLUG}/sessions`, { params: { per_page: count } });
  return data;
};

export const getSpeakers = async (count: number) => {
  const { data } = await axiosInstance.get(`/events/${EVENT_SLUG}/speakers`, { params: { per_page: count } });
  return data;
};

export const getSponsors = async () => {
  const { data } = await axiosInstance.get(`/events/${EVENT_SLUG}/sponsors`);
  return data;
};

export const getOrganizers = async () => {
  const { data } = await axiosInstance.get(`/organizers`);
  return data;
};

export const getOrganizingTeam = async () => {
  const { data } = await axiosInstance.get(`/organizers/${ORG_SLUG}/team`);
  return data;
};

export const getEventFeed = async () => {
  const { data } = await axiosInstance.get(`/events/${EVENT_SLUG}/feeds`);
  return data;
};

export const getEventSchedule = async () => {
  const { data } = await axiosInstance.get(`/events/${EVENT_SLUG}/schedule`, { params: { grouped: true } });
  return data;
};

export const sendFeedback = async (feedback: string, rating: number) => {
  const _feedback = { feedback, rating };
  const res = await axiosInstance.post(`/events/${EVENT_SLUG}/feedback`, _feedback);
  return res;
};

const _queries = [
  {
    queryKey: ['sessions'],
    queryFn: () => getSessions(15),
  },
  {
    queryKey: ['speakers'],
    queryFn: () => getSpeakers(15),
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
];

export const prefetchEvent = async () => {
  _queries.forEach(async (query) => {
    await queryClient.prefetchQuery(query as UseQueryOptions<ISessions | ISpeaker | ISponsors | IOrganizers>);
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

  return {
    sessions,
    speakers,
    sponsors,
    organizers,
    schedule,
    isLoading: _isLoading,
    isRefetching: _isRefetching,
    refetch,
  };
};
