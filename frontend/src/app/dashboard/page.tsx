"use client"
import { useSession } from "next-auth/react"
import { use } from "react"
export default function(){
    const session=useSession();
    return (
    <div>
        Dashboard
        {JSON.stringify(session.data?.user)}
    </div>
    )

}