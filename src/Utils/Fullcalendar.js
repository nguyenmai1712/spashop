let eventGuid = 0;
export const todayStr = new Date().toISOString().replace(/T.*$/, '') ;

export function createEventId() {
    return String(eventGuid++)
  }