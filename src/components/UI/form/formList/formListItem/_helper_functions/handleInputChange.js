export default function handleInputChange(name, value, elIndex) {
  dispatch({
    type: 'UPDATE_ENTRY',
    payload: { index: elIndex, name, value }
  });
}