import React from 'react'

const Form = () => {
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
        <div className='flex items-center justify-between shadow-lg p-4'>
            <div>faruq</div>
            <div>oloyedefaruq2@gmail.com</div>
            <div>08083043094</div>
            <div className='flex items-center gap-5 cursor-pointer font-bold'>
            <span className='text-green-500'>delete</span>
              <span className='text-red-500'>edit</span>
            </div>
          </div>
       </div>
    </div>
  )
}

export default Form