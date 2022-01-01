import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut } from "firebase/auth";
import { useState,useEffect } from "react";
import handleIntialize from "../Pages/Login/Firebase/FirebaseIntialize";
handleIntialize();




const googleprovider = new GoogleAuthProvider();

const Usefirebase =()=>{
    const[user,setUser] = useState([]);
    const auth = getAuth();

    const googleLogin=()=>{
        return signInWithPopup(auth, googleprovider);
        

            };
            useEffect(()=>{
                 onAuthStateChanged(auth, user => {
                     if (user) {
                      setUser(user);
                     
                     } else {
                         setUser({});
                       
                     }
                    
                    
                   });
                   
              },[]);
            const logout =()=>{
                signOut(auth).then(() => {
                    
                  }).catch((error) => {
                    
                  });
            }
         
            return {user,googleLogin,logout}

}
export default Usefirebase;


