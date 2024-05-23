import { useReducer } from 'react';
import { CharacterState, characterReducer } from './characterReducer';

const INITIAL_STATE: CharacterState = {
  age: 20,
  name: 'John'
};

function UseReducerExample() {
  const [state, dispatch] = useReducer(characterReducer, INITIAL_STATE);

  return (
    <div>
      <div style={{ fontSize: 30, backgroundColor: 'blue', color: 'white', marginBottom: 20 }}>
        <div>Name: {state.name}</div>
        <div>age: {state.age}</div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: 16, marginBottom: 24 }}>
        <button onClick={() => dispatch({ type: 'INCREMENT_AGE' })}>INCREMENT_AGE</button>
        <button onClick={() => dispatch({ type: 'DECREMENT_AGE' })}>DECREMENT_AGE</button>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: 16 }}>
        <button onClick={() => dispatch({ type: 'LOWER_CASE_NAME' })}>LOWER_CASE_NAME</button>
        <button onClick={() => dispatch({ type: 'UPPER_CASE_NAME' })}>UPPER_CASE_NAME</button>
      </div>
    </div>
  );
}

export default UseReducerExample;

// function createSuitableCharacterState(defaultState: CharacterState): CharacterState {
//   console.log('%c createCharacterState', 'background: purple; color: white');

//   return { name: defaultState.name.toUpperCase(), age: defaultState.age };
// }
