import type { IDateForDayButton, ISchedule, Room, SessionForSchedule } from '../global';
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

/**
 * function that returns day, date and key of a given session
 * @param schedule ISchedule
 * @returns Array<dates>
 * @example
 */
export const getDaysFromSchedule = (schedule: ISchedule): Array<IDateForDayButton> => {
  const keys = Object.keys(schedule.data);
  const datesToSave = keys.map((key, index) => {
    const date = new Date(key).getDate();
    const dateWithSuffix = getSuffixForDate(date);
    return {
      day: `Day ${index + 1}`,
      date: `${date}${dateWithSuffix}`,
      key,
    };
  });
  return datesToSave;
};

/**
 * function that returns suffix for a date
 * @param date number
 * @returns Array<dates>
 * @example 2 returns 2nd
 */
const getSuffixForDate = (date: number) => {
  const suffix = date > 0 ? ['th', 'st', 'nd', 'rd'][(date > 3 && date < 21) || date % 10 > 3 ? 0 : date % 10] : '';
  return suffix;
};

/**
 * a function that gets the start time, end time, and room.title of a session from the schedule.data array
 * @param start_date_time start time of a session
 * @param end_date_time end time of a session
 * @param room array of rooms
 * @returns start time, end time, and room.title
 * @example getScheduleTimesAndLocation('session-1')  // returns 9:00 AM - 10:00 AM  |  Room 1
 */
export const getScheduleTimeAndLocation = (start_date_time: string, end_date_time: string, room?: Room) => {
  // convert time to 12 hour format and hh:mm aa
  const startTime = new Date(start_date_time).toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });
  const endTime = new Date(end_date_time).toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });

  return `${startTime} - ${endTime}  |  Room ${room !== undefined ? room.title : ''}`;
};
