import banner from '../assets/bannerbg.jpg';

const Navbar = () => {
  return (
    <>
  <div className=" px-30 py-5 bg-black z-10 min-h-screen w-full bg-cover bg-center bg-no-repeat text-white" style={{backgroundImage: "url('/src/assets/bannerbg.jpg')",

  }}>
    <div className='absolute inset-0 bg-cover bg-black/75 '></div>
     <div className="flex justify-between items-center relative z-0  ">
        <div className="text-red-600 text-4xl font-bold">
         NETFLIX
        </div>
       <div className="flex">
         <div>
            <select className="pr-14 border p-1 mr-2 border-gray-500 rounded" name="" id="">
                <option className="text-black bg-blue-500 text-center" value="English">English</option>
                <option className="text-black bg-blue-500 text-center" value="Hindi">Hindi</option>
            </select>
          </div>
          <button className="bg-red-600 px-5 py-1 rounded">Sign In</button>
        </div>
     </div>

   <div className='mt-20'>
    <div className="py-30 items-center flex flex-col relative z-0 ">
           <div className="font-bold text-6xl w-150 text-center"> 
            Unlimited flims, series and more 
           </div>

        <div className="font-bold text-xl py-5">  Starts at NOK 99. Cancel at any time.</div>
        <p> Ready to watch? Enter your email to create or restart your membership.</p>
       
          <div className="py-5 flex">
            <input className="border p-4 border-amber-50 pr-45 mr-2 rounded"type="text" placeholder="Email Address"/>
            <button className="bg-red-600 font-bold w-50 h-14 rounded text-2xl"> Get Started</button>
          </div> 
    </div>
    </div>

</div>
    </>
  )
}


export default Navbar
