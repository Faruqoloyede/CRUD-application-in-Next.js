'use client'
import { account } from "../app/appwrite"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react";

const UseAuth= ()=> {
  const [user, setUser] = useState<any>('');
  const [loading, setLoading] = useState<boolean>(false)
  const router = useRouter();

  useEffect(()=>{
    const checkAuth = async()=>{
      try {
        const currentUser = await account.get();
        setUser(currentUser);
      }catch(err){
        router.push('/Login');
      } finally{
        setLoading(false)
      }
    }
    checkAuth();
  })

  return {user, loading}
}

export default UseAuth
