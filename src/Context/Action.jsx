export const LoginStart = (userCredentials) => ({
  type: "LOGIN_STATE",
});

export const LoginSuccess = (user) => ({
  type: "LOGIN_SUCCESS",
  payload: user,
});

export const LoginFailure = () => ({
  type: "LOGIN_FAILURE",
});
export const Logout = () => ({
  type: "LOGOUT",
});
export const UpdateStart = (userCredentials) => ({
  type: "UPDATE_STATE",
});

export const UpdateSuccess = (user) => ({
  type: "UPDATE_SUCCESS",
  payload: user,
});

export const UpdateFailure = () => ({
  type: "UPDATE_FAILURE",
});
export const deleteUser = () => ({
  type: "DELETE_USER",
});
