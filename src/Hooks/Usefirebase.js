import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut } from "firebase/auth";
import { useState,useEffect } from "react";
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
            setUser(user);
            console.log(user);
        
        })

            };
            useEffect(()=>{
                 onAuthStateChanged(auth, user => {
                     if (user) {
                      setUser(user);
                      console.log(user);
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

