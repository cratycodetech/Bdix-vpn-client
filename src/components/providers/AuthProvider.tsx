/* eslint-disable @typescript-eslint/no-explicit-any */
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export const googleLogin = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    console.log("User Info:", user);
    return result;
  } catch (error: any) {
    console.error("Google Login Error:", error.message);
    throw error;
  }
};
