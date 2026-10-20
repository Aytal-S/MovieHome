import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col items-center gap-5 py-10'>
      <div className='text-center'> Ready to watch? Enter your email to create or restart your membership.</div>
      
      <div className="flex items-center">
            <input className="border p-4 border-gray-500 pr-80 mr-2 rounded "type="text" placeholder="Email Address"/>
            <button className=" text-white bg-red-600 font-bold w-55 h-14 rounded text-2xl"> Get Started</button>
          </div>
    </div>
  )
}

export default Footer
