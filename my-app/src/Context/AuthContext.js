import { createContext, useContext } from 'react';
import { db } from '../firebase';
import { doc } from 'firebase/firestore';
import { onSnapshot, query, collection } from 'firebase/firestore';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    getAuth
} from 'firebase/auth'
const auth = getAuth();

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {



    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };





    return (
        <UserContext.Provider value={{ createUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const UserAuth = () => {
    return useContext(UserContext);
};