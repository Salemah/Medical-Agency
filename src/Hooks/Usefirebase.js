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
  useEffect(() => {
 
    onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user)
        
        


      } else {
        setUser({});

      }
      setIsLoading(false);


    });

  }, []);


  const emailPassRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);

  }
  const emailPassLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);


  };
  const updateName=(name)=>{
    updateProfile(auth.currentUser, {
      displayName:name
    }).then(() => {
      // const newUser= {...user,displayName:name};
      // setUser(newUser);
     
    }).catch((error) => {
      
    });

  }
  const logout = () => {
    signOut(auth).then(() => {

    }).catch((error) => {

    });
  }

  return { user, setUser, googleLogin, logout, emailPassRegister, emailPassLogin,setIsLoading,isLoading,updateName }

}
export default Usefirebase;


