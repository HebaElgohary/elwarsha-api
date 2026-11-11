
export function extractWeekNumberFromTitle(title: string): number | null {
  const regex = /^\[week-0?(\d+)\]/i;

  const match = title.match(regex);
  if (match) return Number(match[1]);
  else return null;
}

export function matchPrToWeek(title: string, targetWeek: number): boolean {
  const weekNumber = extractWeekNumberFromTitle(title);
  if (weekNumber === targetWeek) return true;
  else return false;
}
