import { regex } from "zod";

export function extractWeekNumberFromTitle(title: string): number | null {
  const regex = /\[week-(\d{2})\]/;

  const match = title.match(regex);
  if (match) return Number(match[1]);
  else return null;
}

export function matchPrToWeekmatchPrToWeek(title: string, targetWeek: number): boolean {
  const weekNumber = extractWeekNumberFromTitle(title);
  if (weekNumber === targetWeek) return true;
  else return false;
}
