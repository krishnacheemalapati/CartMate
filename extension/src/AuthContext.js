import { createContext, useContext } from 'react';
import { auth } from './firebase';
import { useState } from 'react';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { onSnapshot } from 'firebase/firestore';
import { doc } from 'firebase/firestore';
import { db } from './firebase';

import {
    createUserWithEmailAndPassword,
    getAuth,
    signOut,
} from 'firebase/auth'


const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const [user, setUser] = useState({});
    const [name, setName] = useState("")
    const [carts, setCarts] = useState([])



    const logout = () => {
        return signOut(auth)
    }



    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)

            if (currentUser) {
                localStorage.setItem("signedIn", "true")
                const unsub = onSnapshot(doc(db, "users", currentUser.uid), (doc) => {


                    setCarts(doc.data().carts)








                    setName(doc.data().username)

                });






            } else {


            }

        });


        return () => {
            unsubscribe();

        };
    }, []);





    return (
        <UserContext.Provider value={{ createUser, user, logout, name, carts }}>
            {children}
        </UserContext.Provider>
    );
};

export const UserAuth = () => {
    return useContext(UserContext);
};