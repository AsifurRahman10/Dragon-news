import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/Firebase.init";
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(user);
  // handle register
  const handleUserRegister = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // google log in
  const loginWithGoogle = () => {
    signInWithPopup(auth, googleProvider);
  };

  const loginWithGithub = () => {
    signInWithPopup(auth, githubProvider);
  };

  // update profile

  const handleUpdateProfile = (name, photo) => {
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  //   handle observer user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  //   sign out
  const handleSignOut = () => {
    setLoading(true);
    signOut(auth);
  };

  //   signIn
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const authInfo = {
    handleUserRegister,
    user,
    setUser,
    handleSignOut,
    signIn,
    loading,
    handleUpdateProfile,
    loginWithGoogle,
    loginWithGithub,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
