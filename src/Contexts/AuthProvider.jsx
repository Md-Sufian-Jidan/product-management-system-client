import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth/web-extension";
import { createContext, useEffect, useState } from "react";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import auth from "../Firebase/Firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const axiosPublic = useAxiosPublic();

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };
    // GOOGLE LOGIN 
    const googleProvider = new GoogleAuthProvider();
    const googleLogin = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider);
    };
    // login with github
    // const githubProvider = new GithubAuthProvider();
    // const githubLogin = () => {
    //     setIsLoading(true);
    //     return signInWithPopup(auth, githubProvider)
    // }
    // sign in user with email and password
    const signInUser = (email, password) => {
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    };
    // log out
    const logOut = () => {
        setIsLoading(true);
        return signOut(auth)
    };
    // observe the user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            // get the token and set in the local storage
            if (currentUser) {
                const userEmail = { email: currentUser?.email };
                axiosPublic.post('/jwt', userEmail)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token);
                            setIsLoading(false);
                        }
                    })
            }
            else {
                // console.log('current user ', currentUser);
                localStorage.removeItem('access-token');
                setIsLoading(false);
            }
        });
        return () => {
            return unsubscribe();
        }
    }, [axiosPublic]);
    const userInfo = { user, setUser, isLoading, createUser, googleLogin, signInUser, logOut }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;