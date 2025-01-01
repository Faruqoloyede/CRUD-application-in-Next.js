'use client'
import { collection_id, database, database_id } from '@/app/appwrite';
import React, { useEffect, useState } from 'react';

const Form = () => {
  const [users, setUser] = useState<any>([]);
  const [documentID, setDocumentID] = useState<string>('');  // Store the document ID of the user to update
  const [loading, setLoading] = useState<boolean>(true);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [number, setNumber] = useState<string>('');

  // Fetch users from database
  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await database.listDocuments(database_id, collection_id);
        setUser(response.documents);
        setLoading(false);
      } catch (err: any) {
        alert(err.message);
      }
    };
    getUsers();
  }, []);

  // Delete user from database
  const deleteUser = async (documentID: string) => {
    try {
      await database.deleteDocument(database_id, collection_id, documentID);
      alert('User deleted successfully');
      setUser(users.filter((user: any) => user.$id !== documentID));  // Remove deleted user from state
    } catch (err: any) {
      alert(err.message);
    }
  };

  // Set the user data for editing
  const handleEdit = (user: any) => {
    setDocumentID(user.$id);
    setName(user.name);
    setEmail(user.email);
    setNumber(user.number);
  };

  // Update user in database
  const EditUser = async () => {
    try {
      await database.updateDocument(database_id, collection_id, documentID, {
        name,
        email,
        number,
      });
      alert('User updated successfully');
      setName('');
      setEmail('');
      setNumber('');
      setDocumentID('');  // Clear document ID after update
    } catch (err: any) {
      alert(err.message);
    }
  };

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    EditUser();  // Trigger update when form is submitted
  };

  return (
    <div className='bg-gray-300'>
      <div className="flex items-center justify-between bg-black text-white p-4">
        <div>Name</div>
        <div>Email</div>
        <div>Phone number</div>
        <div>Action</div>
      </div>

      {/* List of users */}
      <div className="flex flex-col">
        {loading && <h1>Loading...</h1>}
        {users.map((user: any) => (
          <div key={user.$id} className='flex items-center justify-between shadow-lg p-4'>
            <div>{user.name}</div>
            <div>{user.email}</div>
            <div>{user.number}</div>
            <div className='flex items-center gap-5 cursor-pointer font-bold'>
              <span className='text-green-500' onClick={() => deleteUser(user.$id)}>Delete</span>
              <span className='text-red-500' onClick={() => handleEdit(user)}>Edit</span>
            </div>
          </div>
        ))}
      </div>

      {/* Edit form for updating user */}
      {documentID && (
        <form className='mt-10' onSubmit={handleUpdate}>
          <h1 className='text-center text-2xl font-bold mt-5'>Update User</h1>
          <div className='mb-4 flex flex-col gap-3'>
            <label htmlFor="name" className='block text-[20px]'>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='w-full h-[3rem] border border-gray-300 p-2 rounded-md focus:outline-none'
            />
          </div>
          <div className='mb-4 flex flex-col gap-3'>
            <label htmlFor="email" className='block text-[20px]'>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='w-full h-[3rem] border border-gray-300 p-2 rounded-md focus:outline-none'
            />
          </div>
          <div className='mb-4 flex flex-col gap-3'>
            <label htmlFor="number" className='block text-[20px]'>Phone Number</label>
            <input
              type="number"
              name="number"
              placeholder="Phone Number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className='w-full h-[3rem] border border-gray-300 p-2 rounded-md focus:outline-none'
            />
          </div>
          <button type="submit" className='bg-blue-500 w-full h-[3rem] rounded-md text-white text-[18px]'>
            Update User
          </button>
        </form>
      )}
    </div>
  );
};

export default Form;
