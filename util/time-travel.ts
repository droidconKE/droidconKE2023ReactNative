import { advanceBy, advanceTo, clear } from 'jest-date-mock';

const FRAME_TIME = 10;

function advanceOneFrame() {
  advanceBy(FRAME_TIME);
  jest.advanceTimersByTime(FRAME_TIME);
}

/**
 * Setup tests for time travel (start date)
 */
export function setup(startDate = '') {
  jest.useFakeTimers();
  advanceTo(new Date(startDate));
}

/**
 * Travel a specific amount of time (in ms) inside a test
 */
export function travel(time = FRAME_TIME) {
  let framesToRun = time / FRAME_TIME;

  while (framesToRun > 0) {
    advanceOneFrame();
    framesToRun--;
  }
}

/**
 * End test with time travel
 */
export function teardown() {
  clear();
  jest.useRealTimers();
}
