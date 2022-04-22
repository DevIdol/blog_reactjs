const LoginReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_STATE":
      return {
        user: null,
        isFatching: true,
        error: false,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        isFatching: false,
        error: false,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        isFatching: false,
        error: true,
      };
    case "UPDATE_STATE":
      return {
        ...state,
        isFatching: true,
      };
    case "UPDATE_SUCCESS":
      return {
        user: action.payload,
        isFatching: false,
        error: false,
      };
    case "UPDATE_FAILURE":
      return {
        user: state.user,
        isFatching: false,
        error: true,
      };
    case "LOGOUT":
      return {
        user: null,
        isFatching: false,
        error: false,
      };
    case "DELETE_USER":
      return {
        user: null,
        isFatching: false,
        error: false,
      };
    default:
      return state;
  }
};

export default LoginReducer;
