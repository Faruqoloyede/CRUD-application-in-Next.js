'use client'
import React from 'react'
import { useState } from 'react';
import UseAuth from '../../hooks/UseAuth';
import { database, database_id, collection_id, ID } from '../appwrite';

const page = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [number, setNumber] = useState<string>('');
    const {user, loading} = UseAuth();

    const AddPost = async ()=>{
        try{
            await database.createDocument(database_id, collection_id, ID.unique(),{
                name,
                email,
                number
            })
            alert('user added successfully');
        }catch(err: any){
            alert(err.message);
        }
    }
    
    const handleSubmit =  (e: React.FormEvent)=>{
        e.preventDefault();
        AddPost();
    }

    if(loading) <h1>loading....</h1>
    if(!user){
        return null
    }



  return (
    <div className='max-w-md mx-auto mt-10 border border-gray-300 rounded-lg shadow-md px-4 py-6'>
    <h1 className='text-center text-2xl font-bold mt-5'>Add user</h1>
    <form className='mt-10' onSubmit={handleSubmit}>
        <div className='mb-4 flex flex-col gap-3'>
            <label htmlFor="name" className='block text-[20px]'>Name</label>
            <input type="name" name='name' placeholder='name' value={name} className='w-full h-[3rem] border border-gray-300 p-2 rounded-md focus:outline-none' onChange={(e)=> setName(e.target.value)} />
        </div>
        <div className='mb-4 flex flex-col gap-3'>
            <label htmlFor="email" className='block text-[20px]'>Email</label>
            <input type="email" name='email' placeholder='email' value={email} className='w-full h-[3rem] border border-gray-300 p-2 rounded-md focus:outline-none' onChange={(e)=> setEmail(e.target.value)}  />
        </div>
        <div className='mb-4 flex flex-col gap-3'>
            <label htmlFor="number" className='block text-[20px]'>Phone number</label>
            <input type="number" name='number' value={number} placeholder='number' className='w-full h-[3rem] border border-gray-300 p-2 rounded-md focus:outline-none' onChange={(e)=> setNumber(e.target.value)} />
        </div>
        <button className='bg-blue-500 w-full h-[3rem] rounded-md text-white text-[18px]'>Add user</button>
    </form>
</div>
  )
}

export default page