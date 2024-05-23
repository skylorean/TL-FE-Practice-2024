export interface CharacterState {
  age: number;
  name: string;
}

interface CharacterAction {
  type: 'INCREMENT_AGE' | 'DECREMENT_AGE' | 'LOWER_CASE_NAME' | 'UPPER_CASE_NAME';
}

export function characterReducer(state: CharacterState, action: CharacterAction) {
  const { type } = action;

  switch (type) {
    case 'INCREMENT_AGE': {
      return {
        ...state,
        age: state.age + 1
      };
    }
    case 'DECREMENT_AGE': {
      return {
        ...state,
        age: state.age - 1
      };
    }
    case 'LOWER_CASE_NAME': {
      return {
        ...state,
        name: state.name.toLowerCase()
      };
    }
    case 'UPPER_CASE_NAME': {
      return {
        ...state,
        name: state.name.toUpperCase()
      };
    }
    default:
      return state;
  }
}
