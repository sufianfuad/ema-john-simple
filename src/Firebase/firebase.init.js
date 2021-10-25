// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthentication = () => {
    // Initialize Firebase
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;

/*
steps for authentication
-----------
Initial setup ===0001====
--------------
1.Firebase : create project
2.create web app
3.get configurations
4.initialize firebase
5.Enable auth method
----------------------------
Step-2 setup component===0002====
1.create login component
2.create registration component
3.create route for Login and Register
-----------------------------------
step-3: set auth system
1.setup Sign IN method
2.setup Sign Out Method
3. user state
4. user Effect
5. special observer(user login/logout issue OnAuthStateChange)
6. return necessary methods and state from useFirebase
----------------------
step-4 : create auth context hook(useAuth)
1. create a Auth context
2. create Auth provider
3. use Auth provider
4. create useAuth Hook
----------------------
step-5:
1.create Private Route
2. set private route

step-6: Redirect after login
1. After login redirect user to their desired destination
2.
*/