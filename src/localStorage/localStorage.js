export const loadState = () => {
  try {
    const serializedData = localStorage.getItem('user');
    if (serializedData === null) {
      return undefined;
    }
    return JSON.parse(serializedData);
  } catch (error) {
    return undefined;
  }
};

export const saveState = (user) => {
  try {
    const serializedData = JSON.stringify(user);
    localStorage.setItem('user', serializedData);
  } catch (error) {
    // ?
  }
};
