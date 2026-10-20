

const Details = () => {
  return (
    <div className='text-[16px] px-30 py-5 h-screen'>
      <div className='flex text-[#D1D0DB]'>Questions? Call <div className='underline ml-2'>000-800-919-1743</div></div>
      
      <div className="flex justify-between mt-10 text-[#E5E5E5] text-sm mr-40">
        <div className="w: 200px list-none underline space-y-3 ">
            <li>FAQ</li>
            <li>Investor Relations</li>
            <li>Privacy</li>
            <li>Speed Test</li>
        </div>

        <div className="w: 200px list-none underline space-y-3 text-[#E5E5E5]">
            <li>Help Centre</li>
            <li>Jobs</li>
            <li>Cookie Preferences</li>
            <li>Legal Notices</li>
        </div>


        <div className="w: 200px list-none underline space-y-3">
            <li>Account</li>
            <li>Ways to Watch</li>
            <li>Corporate Information</li>
            <li>Only on Netflix</li>
        </div>

        <div className="w: 200px list-none underline space-y-3">
            <li>Media Centre</li>
            <li>Terms of Use</li>
            <li>Contact Us</li>
        </div>
        </div>

         <div className=" py-12">
            <select className="pr-14 border p-1 mr-2 border-gray-500 rounded" name="" id="">
                <option className="text-black bg-blue-500 text-center" value="English">English</option>
                <option className="text-black bg-blue-500 text-center" value="Hindi">Hindi</option>
            </select>
          </div>

          <div className="text-sm text-[#D1D0DB] ">Netflix India</div>
          <div className="text-sm text-gray-500 mt-10">This page is protected by Google reCAPTCHA to ensure you're not a bot.</div>
    </div>
  )
}

export default Details
