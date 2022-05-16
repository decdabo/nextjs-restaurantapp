export const handleToggleMenu = (state, setState) => {
  if (!state) {
    return setState(true);
  } else {
    return setState(false);
  }
}
