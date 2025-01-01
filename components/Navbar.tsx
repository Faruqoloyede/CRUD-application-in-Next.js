'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import UseAuth from '@/hooks/UseAuth'
import { account } from '../app/appwrite'
import { useRouter } from 'next/navigation'

const Navbar = () => {
  const pathname = usePathname()
  const {user} = UseAuth();
  const router = useRouter()

  const handleLogout = async()=>{
    try{
      await account.deleteSession('current');
      alert('logout')
      router.push('/Login')

    }catch(err:any){
      console.log(err.message);
      
    }
  }

  return (
    <header className='bg-black h-15'>
      <nav className='flex items-center justify-between text-white mx-auto max-w-7xl px-4 py-6 lg:px-8 sm:px-6'>
        <h1 className='lg:text-5xl text-2xl font-bold'>CRUD</h1>
        <p>{user && `welcome ${user.name}`}</p>
        <div className='flex items-center justify-end gap-5'>
          {pathname === '/Adduser' ? (
            <Link href='/' className='bg-blue-500 px-4 py-3 rounded-lg'>Home</Link>
          ) : (
            <Link href='/Adduser' className='bg-blue-500 px-4 py-3 rounded-lg'>Add User</Link>
          )}
          <Link href='/Login' className='bg-red-600 px-4 py-3 rounded-lg'>Signin</Link>
          <button className='bg-red-600 px-4 py-3 rounded-lg' onClick={handleLogout}>Logout</button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar