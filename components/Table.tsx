'use client'
import { collection_id, database, database_id } from '@/app/appwrite';
import React, { useEffect } from 'react'
import { useState } from 'react'

const Form = () => {
  const [users, setUser] = useState<any>([]);
  const [documentID, setDocumentID] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(true);
  // function to fetch user from database

  useEffect(()=>{
    const getUsers = async ()=>{
      try {
        const response = await database.listDocuments(database_id, collection_id);
        setUser(response.documents);
        console.log(response.documents);
       
        setLoading(false)
      }catch(err: any){
        alert(err.message)
      }
    }
    getUsers();
  }, [])

  // delete user
  

  const deleteUser = async (documentID: string)=>{
    try {
      await database.deleteDocument(database_id, collection_id, documentID);
      alert('deleted')
      setUser(users.filter((user: any)=> user.$id !== documentID))
    }catch(err: any){
      alert(err.message)
    }
  }

  const deleteID = (documentID: string)=>{
      deleteUser(documentID);
  }

  return (
    <div className='bg-gray-300'>
        <div className="flex items-center justify-between bg-black text-white p-4">
          <div>Name</div>
          <div>Email</div>
          <div>Phone number</div>
          <div>Action</div>
        </div>
        {/* data */}
       <div className="flex flex-col">
        {loading && <h1>loading.....</h1>}
        {users.map((user: any)=>(
            <div key={user.$id} className='flex items-center justify-between shadow-lg p-4'>
            <div>{user.name}</div>
            <div>{user.email}</div>
            <div>{user.number}</div>
            <div className='flex items-center gap-5 cursor-pointer font-bold'>
            <span className='text-green-500' onClick={()=>deleteID(user.$id)}>delete</span>
              <span className='text-red-500'>edit</span>
            </div>
          </div>
        ))}
       </div>
    </div>
  )
}

export default Form