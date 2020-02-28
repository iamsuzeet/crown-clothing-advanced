import * as actionTypes from "../actionTypes";

export const googleSignInStart = () => ({
  type: actionTypes.GOOGLE_SIGN_IN_START
});

export const signInSuccess = user => ({
  type: actionTypes.SIGN_IN_SUCCESS,
  payload: user
});

export const signInFailure = error => ({
  type: actionTypes.SIGN_IN_SUCCESS,
  payload: error
});

export const emailSignInStart = emailAndPassword => ({
  type: actionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword
});
