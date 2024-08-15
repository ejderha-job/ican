import { filter } from "./Subcategory";

describe("тестируем filter", () => {
    it('хороший кейс', () => {
        expect(filter([1], [1, 2])).toEqual([2]);
    });
})