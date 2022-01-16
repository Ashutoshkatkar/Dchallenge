import React, { useEffect, useState } from 'react'
import { signInWithPopup, signInWithGoogle, GoogleAuthProvider, signOut } from 'firebase/auth'
import { authentication } from './firebase'
import { useNavigate } from "react-router-dom";
const Home = () => {


    const [show, setShow] = useState();
    let navigate = useNavigate();
    const signInWithFirebase = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(authentication, provider)
            .then((res) => {
                console.log(res)
                setShow(true)
                navigate('/todo')
            }).catch((err) => {
                console.log(err)
            })
    }

    const signOutWithFirebase = () => {
        signOut(authentication).then(() => {
            console.log('signout')
            setShow(false)
            navigate('/')
        }).catch((err) => {
            console.log(err)
        })
    }
    return (
        <div>
            <div className='row justify-content-center mt-4'>
                <div className='col-4 col-lg-4'>
                    <div className="card text-white bg-dark mb-3" >
                        {show ? (
                            <a className="btn btn-primary" onClick={signOutWithFirebase} >signout</a>
                        ) : (<a className="btn btn-primary" onClick={signInWithFirebase} >signin</a>)}


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
