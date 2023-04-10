import React from 'react';
import { Auth } from 'aws-amplify';
export default function LandingPage(props) {
    async function checkUser(){
        const user = await Auth.currentAuthenticatedUser()
        console.log('user: ', user)
    }
    return (
        <div>
            
            <button onClick={()=>Auth.federatedSignIn({provider:"Google"})}>Sign in w google</button>
            <button onClick={checkUser}>Check user</button>
        </div>
    )
}
