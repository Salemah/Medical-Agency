import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { useState, useEffect } from "react";
import handleIntialize from "../Pages/Login/Firebase/FirebaseIntialize";
handleIntialize();




const googleprovider = new GoogleAuthProvider();

const Usefirebase = () => {
  const [user, setUser] = useState([]);
  const [isLoading,setIsLoading] = useState(true);

  const auth = getAuth();

  const googleLogin = () => {
    return signInWithPopup(auth, googleprovider);
};
  
    
 


  const emailPassRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
   };

  const emailPassLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
   };

  const updateName=(name)=>{
    updateProfile(auth.currentUser, {
      displayName:name
    }).then(() => {
     
      
     
    }).catch((error) => {
      
    });

  }
  useEffect(() =>{
    const unsubscribe = onAuthStateChanged(auth , (user)=> 
    {
       if(user){
              
             setUser(user)
         } else{
             setUser({})
         }
         setIsLoading(false)
    });
     return ()=> unsubscribe()
},[]);
  const logout = () => {
    setIsLoading(true);
    signOut(auth).then(() => {

    }).catch((error) => {

    });
    setIsLoading(false);
  }

  return { user, setUser, googleLogin, logout, emailPassRegister, emailPassLogin,setIsLoading,isLoading,updateName }

}
export default Usefirebase;


