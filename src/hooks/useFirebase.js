import { useEffect, useState } from "react";

import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";

// initialize App
initializeAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState({})

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider()

    //for google sign in
    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider);
        // .then(result => {
        //     setUser(result.user)
        // })
    }
    // for logout user
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }

    // special observer
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
        })
    }, [])

    return {
        user,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;