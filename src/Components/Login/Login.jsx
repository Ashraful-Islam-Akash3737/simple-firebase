// import React from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase/firebase.init";
import { useState } from "react";

const Login = () => {
    const [user, setUser] = useState(null);

    const auth = getAuth(app);
    console.log("app", app);
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const loggedInUser = result.user;
                setUser(loggedInUser);
                console.log(loggedInUser);
            })
            .catch(error => {
                console.log("error", error.message);
            })
    }
    const handleGoogleSignOut = () => {
        signOut(auth)
            .then(result=> {
                setUser(null);
                console.log("result", result);
            })
            .catch(error => {
                console.log("error", error);
            })
    }
    return (
        <div>
            {/** user ? log out : log in */}
            {
                user ? 
                <button onClick={handleGoogleSignOut}>log out</button> :
                <button onClick={handleGoogleSignIn}>log in</button>
            }
            
            {/* or */}
            {/* <button onClick={handleGoogleSignIn}>log in</button>
            <button onClick={handleGoogleSignOut}>log out</button> */}

            {
                user && <div>
                    <h3>User Name: {user.displayName}</h3>
                    <p>Email: {user.email}</p>
                    <img src={user.photoURL} alt="user-img" />
                </div>
            }
        </div>
    );
};

export default Login;