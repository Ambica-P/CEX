"use client";
import { signIn, useSession } from "next-auth/react";
import { SecondaryButton } from "./Button"
import { useRouter } from "next/navigation";

export const Hero=()=>{
    const session = useSession();
    const router= useRouter();
    return (
    <div>
        <div className='text-4xl font-medium '>
            <span>
                The indian Cryptocurrency,    
            </span>
            <span className="text-blue-400 px-2">
                Revolution 
            </span>
        </div>
        <div className="flex justify-center pt-4 text-slate-600">
            Create a frictionless wallet from India with just a Google Account 
        </div>
        <div className="flex justify-center text-slate-600">
            Convert INR into Cryptocurrency
        </div>
        <div className="pt-4 flex justify-center">
            {session.data?.user? <SecondaryButton onClick={()=>{
                router.push("/dashboard");
            }}>Go to Dashboard </SecondaryButton>:<SecondaryButton onClick={()=>{
                signIn("google");
            }}>Login with Google </SecondaryButton>}
            
        </div>
    </div>
    )
}