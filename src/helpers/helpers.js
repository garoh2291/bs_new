export function getToken() {
  return JSON.parse(localStorage.getItem("token"));
}

export const removeToken = () => {
  localStorage.removeItem("token");
};

export function useAuth() {
  return {
    isAuth: !!getToken(),
  };
}
