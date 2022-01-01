import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";
const handleIntialize =()=>{
    initializeApp(firebaseConfig);
}
export default handleIntialize;