import { useEffect, useState } from "react";
import initializeFirebase from "../firebase/firebase.init";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
  getIdToken,
} from "firebase/auth";
import { useRouter } from "next/router";
import "firebase/database";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../firebase/firebase.config";
import {
  Firestore,
  addDoc,
  collection,
  getFirestore,
} from "firebase/firestore";

// initialize firebase app
initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState("");
  const [admin, setAdmin] = useState(false);
  const [token, setToken] = useState("");
  const router = useRouter();

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  // function for google signIn
  const signInWithGoogle = () => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        // userData(user.email, user.displayName, "PUT");
        setAuthError("");
        // const destination = location?.state?.from || "/";
        // history.replace(destination);
        router.replace("/dashboard");
      })
      .catch((error) => {
        setAuthError(error.massage);
      })
      .finally(() => setIsLoading(false));
  };

  // user observation
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        getIdToken(user).then((idToken) => {
          setToken(idToken);
        });
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, [auth, !user?.email, user?.email]);
  console.log();

  // For Logout
  const logout = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoading(false));
  };

  const addItem = async (newItem) => {
    const docRef = await addDoc(collection(db, "grades"), newItem);
    toast.success("Grades Added Successfully");
  };

  const saveContactToFirebase = async (data) => {
    const docRef = await addDoc(collection(db, "contacts"), data);
  };

  const saveMarksToFirebase = async (data) => {
    const docRef = await addDoc(collection(db, "marks"), data);
  };

  return {
    signInWithGoogle,
    saveContactToFirebase,
    saveMarksToFirebase,
    user,
    logout,
    db,
    isLoading
  };
};

export default useFirebase;
