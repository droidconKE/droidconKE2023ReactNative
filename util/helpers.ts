import type { SessionForSchedule } from '../global';
import { Schedule } from '../mock/schedule';

/**
 *  a function to truncate text and add ellipsis
 * @param limit  number of characters to truncate
 * @param text  text to truncate
 * @returns  truncated text
 */
export const truncate = (limit: number, text?: string) => {
  if (text && text.length > limit) {
    return `${text.substring(0, limit)}...`;
  } else {
    return text;
  }
};

/**
 * a function that gets the start time and room.title of a session from the schedule.data array
 * @param slug  slug of session
 * @returns  start time and room.title
 * @example  getSessionTimeAndLocation('session-1')  // returns @ 9:00  |  Room 1
 */
export const getSessionTimeAndLocation = (slug: string) => {
  for (const key in Schedule.data) {
    const sessionData = Schedule.data[key];
    const session = sessionData?.find((item: SessionForSchedule) => item.slug === slug);
    if (session) {
      const startTime = session.start_time.split(':').slice(0, 2).join(':');
      return `@ ${startTime}  |  Room ${session?.rooms[0]?.title}`;
    }
  }
  return '';
};

/**
 * a function that gets the start time, end time, and room.title of a session from the schedule.data array
 * @param _slug slug of session
 * @returns start time, end time, and room.title
 * @example getSessionTimesAndLocation('session-1')  // returns 9:00 AM - 10:00 AM  |  Room 1
 */
export const getSessionTimesAndLocation = (_slug: string) => {
  for (const key in Schedule.data) {
    const sessionData = Schedule.data[key];
    const sessionItem = sessionData?.find((item: SessionForSchedule) => item.slug === _slug);

    if (sessionItem) {
      // convert time to 12 hour format and hh:mm aa
      const startTime = new Date(sessionItem.start_date_time).toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      });
      const endTime = new Date(sessionItem.end_date_time).toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      });

      return `${startTime} - ${endTime}  |  Room ${sessionItem?.rooms[0]?.title}`;
    }
  }
  return '';
};

/**
 * a function that gets the start time and returns it start time in am format
 * @param startTime
 * @returns start time
 * @example getSessionTime('12:30:00') // returns 12:30 PM
 */
export const getSessionTime = (startTime: string) => {
  const [hours, minutes] = startTime.split(':').map(Number);

  let formattedHours;
  let period;
  if (hours !== undefined) {
    formattedHours = hours % 12;
    if (formattedHours === 0) {
      formattedHours = 12; // 0 should be displayed as 12 pm
    }

    period = hours < 12 ? 'am' : 'pm';
  }

  const formattedMinutes = String(minutes).padStart(2, '0');

  return `${formattedHours}:${formattedMinutes} ${period}`;
};

/**
 * function that returns twitter_handle of speaker given the twitter url
 * @param url twitter url
 * @returns twitter_handle
 * @example getTwitterHandle('https://twitter.com/kharioki')  // returns kharioki
 */
export const getTwitterHandle = (url?: string) => {
  const twitterHandle = url?.split('/').pop();
  return twitterHandle;
};
