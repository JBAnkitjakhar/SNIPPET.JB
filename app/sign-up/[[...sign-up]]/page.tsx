"use client"
import {SignUp} from "@clerk/nextjs";

const SignUpPage = () =>{
    return (
        <div className={`w-full h-screen flex justify-center items-center`}>
            <SignUp />
        </div>
    )
}

export default  SignUpPage;     //original is SignUp but in my side there is error of same conficts of local and import