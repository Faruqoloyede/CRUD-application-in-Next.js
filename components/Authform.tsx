'use client'

import React from 'react'
import { useState } from 'react'
import { account, ID } from '../app/appwrite';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { userAgent } from 'next/server';

type FormType = "signin" | "signup"
const page = ({type}: {type: FormType}) => {

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string | null>('');
    const router = useRouter();

    const handleSignup = async()=>{
        if (!name.trim()) {
            setError("Name is required.");
            return;
          }
          if (name.length > 128) {
            setError("Name must be 128 characters or less.");
            return;
          }
        try{
            await account.create(ID.unique(), email.trim(), password.trim(), name.trim());
            alert('account successfully created you can now login');
        } catch(err: any){
            setError(err.message)
        }
    }

    const handleSignin = async()=>{
        try{
            await account.createEmailPasswordSession(email, password);
            alert('successfully logged in');
            router.push('/Adduser');
        }catch(err: any){
            setError(err.message)
        }
    }

    const handleSubmit =  (e: React.FormEvent)=>{
        e.preventDefault();
        setError('');
        type === 'signin' ? handleSignin() : handleSignup();
    }

  return (
    <div className='max-w-md mx-auto mt-10 border border-gray-300 rounded-lg shadow-md px-4 py-6'>
        <h1 className='text-center text-2xl font-bold mt-5'>{type == 'signin' ? 'SignIn' : 'Signup'}</h1>
        {error && <p className='text-red-500 text-center'>{error}</p>}
        <form className='mt-10' onSubmit={handleSubmit}>
           {type == 'signup' && (
             <div className='mb-4 flex flex-col gap-3'>
             <label htmlFor="name" className='block text-[20px]'>Name</label>
             <input type="name" name='name' placeholder='name' value={name} className='w-full h-[3rem] border border-gray-300 p-2 rounded-md focus:outline-none' onChange={(e)=> setName(e.target.value)} />
         </div>
           )}
            <div className='mb-4 flex flex-col gap-3'>
                <label htmlFor="email" className='block text-[20px]'>Email</label>
                <input type="email" name='email' placeholder='email' value={email} className='w-full h-[3rem] border border-gray-300 p-2 rounded-md focus:outline-none' onChange={(e)=> setEmail(e.target.value)}  />
            </div>
            <div className='mb-4 flex flex-col gap-3'>
                <label htmlFor="password" className='block text-[20px]'>Password</label>
                <input type="password" name='password' value={password} placeholder='password' className='w-full h-[3rem] border border-gray-300 p-2 rounded-md focus:outline-none' onChange={(e)=> setPassword(e.target.value)} />
            </div>
            <button className='bg-blue-500 w-full h-[3rem] rounded-md text-white text-[18px]'>{type == 'signin' ? 'SignIn' : 'Signup'}</button>
           <div className="flex justify-center gap-1 mt-5">
            <p className='text-[18px] text-black '>{type === 'signin' ? "Don't have an account?" : "Already have an account"}</p>
            <Link href={type === 'signin' ? '/Signup' : '/Login'} className='text-[18px] text-black '>{type === 'signin' ? 'signup' : 'signin'}</Link>
           </div>
        </form>
    </div>
  )
}

export default page