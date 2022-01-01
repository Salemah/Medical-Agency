import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";
import handleIntialize from "../Pages/Login/Firebase/FirebaseIntialize";
handleIntialize();




const googleprovider = new GoogleAuthProvider();

const Usefirebase =()=>{
    const[user,setUser] = useState([]);
    const auth = getAuth();

    const googleLogin=()=>{
        signInWithPopup(auth, googleprovider)
        .then((result) => {
            const user = result.user;
            console.log(user);
        
        }).catch((error) => {

        });

            }
            return {user,googleLogin}

}
export default Usefirebase;


