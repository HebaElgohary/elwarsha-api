import { extractWeekNumberFromTitle, matchPrToWeek } from "./github-matcher.js";

describe("test github matcher", () => {
  describe("extractWeekNumberFromTitle", () => {
    it("extracts week number from a valid title", () => {
      const weekNumber = extractWeekNumberFromTitle("[week-06] Add authentication");
      expect(weekNumber).toBeDefined();
      expect(weekNumber).toBe(6);
    });
    it("extracts week number without 0-padding", () => {
      const weekNumber = extractWeekNumberFromTitle("[week-6] Add authentication");
      expect(weekNumber).toBeDefined();
      expect(weekNumber).toBe(6);
    });
    it("extracts week number match case-insenstive", () => {
      const weekNumber = extractWeekNumberFromTitle("[WEEK-6] Add authentication");
      expect(weekNumber).toBeDefined();
      expect(weekNumber).toBe(6);
    });

    it('rejects title not starting with "[week-06]" ', () => {
      const weekNumber = extractWeekNumberFromTitle("Add authentication [WEEK-6] ");
      expect(weekNumber).toBeNull();
    });
    it('rejects title does not contain "[week-06]" ', () => {
      const weekNumber = extractWeekNumberFromTitle("Add authentication  ");
      expect(weekNumber).toBeNull();
    });
    it("returns null when the title has an invalid format", () => {
      expect(extractWeekNumberFromTitle("[week-] Add authentication")).toBeNull();
    });
  });
  describe("matchPrToWeek", () => {
    it("returns true when the same week ", () => {

      expect(matchPrToWeek("[week-06] Add authentication",6)).toBe(true);
      
    });

      it("rejects a different week", () => {
    expect(matchPrToWeek("[week-05] Add authentication", 6)).toBe(false);
  });

  it("rejects a title without a valid week prefix", () => {
    expect(matchPrToWeek("Add authentication", 6)).toBe(false);
  });
  });


});
