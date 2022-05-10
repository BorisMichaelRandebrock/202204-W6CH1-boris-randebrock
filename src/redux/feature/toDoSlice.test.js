import mockArray from "../../mockArray/mockArray";
import toDoSlice, {
  addToDoSActionCreator,
  removeToDosActionCreator,
} from "./toDoSlice";

describe("Given the toDoSLice component", () => {
  describe("When rendered with the action type empty", () => {
    test("Then it should return an array with two items", () => {
      const givenAction = {
        type: "",
        payload: addToDoSActionCreator,
      };

      const array = mockArray;
      const arrayLength = 2;
      const expectedResult = toDoSlice(array, givenAction);

      expect(expectedResult).toHaveLength(arrayLength);
    });
  });
  describe("When rendered with the action 'addToDoSActionCreator'", () => {
    test("Then it should render an array with 3 list items", () => {
      const givenAction = {
        type: addToDoSActionCreator,
        payload: addToDoSActionCreator,
      };

      const array = mockArray;
      const arrayLength = 3;
      const expectedResult = toDoSlice(array, givenAction);

      expect(expectedResult).toHaveLength(arrayLength);
    });
  });
  describe("When rendered with the action 'removeToDosActionCreator'", () => {
    test("Then Iit should render an array with 1 listItem", () => {
      const givenAction = {
        type: removeToDosActionCreator,
        payload: addToDoSActionCreator,
      };

      const array = mockArray;
      const arrayLength = 1;
      const expectedResult = toDoSlice(array, givenAction);

      expect(expectedResult).toHaveLength(arrayLength);
    });
  });
});
