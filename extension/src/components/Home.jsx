import Button from "../components/Button";
import cart from "../../src/cartmate.png";
import { AiFillHome } from "react-icons/ai"
import { AiOutlineUser } from "react-icons/ai"
import { useState } from "react";
import { UserAuth } from "../AuthContext"
import { setDoc } from "firebase/firestore";
import { doc } from "firebase/firestore";
import { db } from "../firebase";




export default function Home() {

    const [home, setHome] = useState(true)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const { createUser, user, logout, name } = UserAuth()






    const handleSubmit = async (e) => {
        e.preventDefault()





        // await setDoc(doc(db, "users", credential.user.uid), {
        //     email: email,
        //     username: username,
        //     money: 0.00
        // });




    }
    return (
        home ? <>
            <div className="header">
                <img className="logo" src={cart}></img>
                <Button text="X" />

            </div>
            <div className="main">
                <img src="https://cdn.honey.io/images/extension/coiny_honeybutton_dollar.png" style={{ height: "150px", width: "200px" }}></img>
                <h1 style={{ paddingLeft: "20px", paddingRight: "20px" }}>CartMate makes shopping with your friends easier than ever.</h1>
                <h3 className="desc" style={{ paddingLeft: "20px", paddingRight: "20px", color: "gray" }}>
                    Along with searching for coupons, did you know that you can also earn rewards, get price drop alerts, and score more free perks?
                    Join millions of in-the-know members who have access to it all.
                </h3>
                <button className="join">Join the community - It's free</button>


            </div>
            <div className="footer">
                <AiFillHome onClick={() => {
                    if (!home) {
                        setHome(prevHome => !prevHome)
                    }
                }} className="home" size="35px" fill="white" style={{ paddingTop: "10px", paddingBottom: "10px", borderBottom: home ? "3px solid rgb(255, 106, 0)" : "none" }} />
                <AiOutlineUser onClick={() => {
                    if (home) {
                        setHome(prevHome => !prevHome)
                    }
                }} className="user" size="35px" fill="white" style={{ paddingTop: "10px", paddingBottom: "10px", borderBottom: home ? "none" : "3px solid rgb(255, 106, 0)" }} />
            </div>
        </> : <>
            {user ? <>
                <div className="header">
                    <img className="logo" src={cart}></img>
                    <Button text="X" />



                </div>

                <div className="main">
                    <img src="https://cdn.honey.io/images/extension/coiny_honeybutton_dollar.png" style={{ height: "150px", width: "200px" }}></img>
                    <h1 style={{ paddingLeft: "20px", paddingRight: "20px" }}>Hey, {name}!</h1>

                    <button onClick={() => {
                        logout()
                    }} className="join">Log Out</button>


                </div>
                <div className="footer">
                    <AiFillHome onClick={() => {
                        if (!home) {
                            setHome(prevHome => !prevHome)
                        }
                    }} className="home" size="35px" fill="white" style={{ paddingTop: "10px", paddingBottom: "10px", borderBottom: home ? "3px solid rgb(255, 106, 0)" : "none" }} />
                    <AiOutlineUser onClick={() => {
                        if (home) {
                            setHome(prevHome => !prevHome)
                        }
                    }} className="user" size="35px" fill="white" style={{ paddingTop: "10px", paddingBottom: "10px", borderBottom: home ? "none" : "3px solid rgb(255, 106, 0)" }} />
                </div>
            </> :
                <>
                    <div className="header">
                        <img className="logo" src={cart}></img>
                        <Button text="X" />



                    </div>

                    <div className="main">
                        <img src="https://cdn.honey.io/images/extension/coiny_honeybutton_dollar.png" style={{ height: "150px", width: "200px" }}></img>
                        <h1 style={{ paddingLeft: "20px", paddingRight: "20px" }}>Join CartMate</h1>
                        <div className="inputs">
                            <input className="email" onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Username"></input>
                            <input className="email" onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email"></input>
                            <input className="password" onChange={(e) => setPassword(e.target.value)} type="text" placeholder="Password"></input>
                        </div>
                        <button onClick={() => {
                            createUser(email, password)
                                .then(credential => {
                                    setDoc(doc(db, "users", credential.user.uid), {
                                        email: email,
                                        username: username,
                                        carts: []

                                    });
                                })

                        }} className="join">Sign Up</button>


                    </div>
                    <div className="footer">
                        <AiFillHome onClick={() => {
                            if (!home) {
                                setHome(prevHome => !prevHome)
                            }
                        }} className="home" size="35px" fill="white" style={{ paddingTop: "10px", paddingBottom: "10px", borderBottom: home ? "3px solid rgb(255, 106, 0)" : "none" }} />
                        <AiOutlineUser onClick={() => {
                            if (home) {
                                setHome(prevHome => !prevHome)
                            }
                        }} className="user" size="35px" fill="white" style={{ paddingTop: "10px", paddingBottom: "10px", borderBottom: home ? "none" : "3px solid rgb(255, 106, 0)" }} />
                    </div>
                </>
            }

        </>
    )
}