import { ThunkAction } from "redux-thunk";
import { RootState } from "../../store/store";
import { loginSuccess, logout, setAuthenticated } from "./authSlice";

// Simulated API call for authentication
const simulateAuthentication = async (userData: any, isSignup: boolean) => {
  return new Promise<any>((resolve, reject) => {
    setTimeout(() => {
      // Simulate successful response
      resolve({
        id: 1,
        username: userData.username,
        email: userData.email,
        user: { name: "Don" },
        token: "fdas21fds1g3sd21gs132",
      });
      // Simulate error
      // reject(new Error('Authentication failed'));
    }, 1000);
  });
};

// Thunk actions
export const signin =
  (userData: any): ThunkAction<void, RootState, unknown, any> =>
  async (dispatch) => {
    try {
      const user = await simulateAuthentication(userData, false);
      // Dispatch action to set authenticated status
      dispatch(setAuthenticated(user));
    } catch (error) {
      // Handle error
    }
  };

export const signup =
  (userData: any): ThunkAction<void, RootState, unknown, any> =>
  async (dispatch) => {
    try {
      const user = await simulateAuthentication(userData, true);
      // Dispatch action to set authenticated status
      dispatch(setAuthenticated(user));
    } catch (error) {
      // Handle error
    }
  };

export const signout =
  (): ThunkAction<void, RootState, unknown, any> => async (dispatch) => {
    dispatch(logout());
  };

export default { signin, signup, signout };
