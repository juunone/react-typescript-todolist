import {
  CREATE,
  REMOVE,
  TOGGLE,
  toggle,
  create,
  remove,
  todoReducer,
  CHANGE_INPUT,
  changeInput
} from "../todos";

describe("todos", () => {
  describe("#actionType", () => {
    it("should create an action to add a todo", () => {
      const text = "test";
      const expectedAction = {
        type: CREATE,
        payload: {
          id: 0,
          text: text,
          done: false
        }
      };
      expect(create(text)).toStrictEqual(expectedAction);
    });

    it("should remove an action to add a todo", () => {
      const id = 1;
      const expectedAction = {
        type: REMOVE,
        meta: {
          id
        }
      };
      expect(remove(id)).toStrictEqual(expectedAction);
    });

    it("should toggle an action to add a todo", () => {
      const id = 1;
      const expectedAction = {
        type: TOGGLE,
        meta: {
          id
        }
      };
      expect(toggle(id)).toStrictEqual(expectedAction);
    });

    it("should toggle an action to add a todo", () => {
      const input = "aa";
      const expectedAction = {
        type: CHANGE_INPUT,
        meta: {
          input
        }
      };
      expect(changeInput(input)).toStrictEqual(expectedAction);
    });
  });

  describe("todos reducer", () => {
    it("should return the initial state", () => {
      expect(todoReducer(undefined, {})).toEqual({
        todoItems: [],
        input: ""
      });
    });

    it("should handle CREATE", () => {
      expect(
        todoReducer(
          { todoItems: [], input: "" },
          {
            type: CREATE,
            payload: {
              id: 0,
              text: "aaa",
              done: false
            }
          }
        )
      ).toEqual({
        todoItems: [{ id: 0, text: "aaa", done: false }],
        input: ""
      });
    });

    it("should handle REMOVE", () => {
      expect(
        todoReducer(
          { todoItems: [{ id: 0, text: "aaa", done: false }], input: "" },
          {
            type: REMOVE,
            meta: {
              id: 0
            }
          }
        )
      ).toEqual({
        todoItems: [],
        input: ""
      });
    });

    it("should handle TOGGLE", () => {
      expect(
        todoReducer(
          { todoItems: [{ id: 0, text: "aaa", done: false }], input: "" },
          {
            type: TOGGLE,
            meta: {
              id: 0
            }
          }
        )
      ).toEqual({
        todoItems: [{ id: 0, text: "aaa", done: true }],
        input: ""
      });
    });

    it("should handle CHANGE INPUT", () => {
      expect(
        todoReducer(
          { todoItems: [], input: "" },
          {
            type: CHANGE_INPUT,
            meta: {
              input: "aaa"
            }
          }
        )
      ).toEqual({
        todoItems: [],
        input: "aaa"
      });
    });
  });
});
