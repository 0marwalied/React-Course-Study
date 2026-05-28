export const getLoggedInUserData = (): {
  jwt: string;
  user: unknown;
} | null => {
  const storageKey = "loggedInUser";
  const userDataString = localStorage.getItem(storageKey);
  const userData = userDataString ? JSON.parse(userDataString) : null;
  return userData;
};
