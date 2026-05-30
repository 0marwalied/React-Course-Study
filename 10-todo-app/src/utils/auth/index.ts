export const getLoggedInUserData = (): {
  jwt: string;
  user: {
    id: string;
    username: string;
    email: string;
    createdAt: string;
    updatedAt: string;
    documentId: string;
  };
} | null => {
  const storageKey = "loggedInUser";
  const userDataString = localStorage.getItem(storageKey);
  const userData = userDataString ? JSON.parse(userDataString) : null;
  return userData;
};
