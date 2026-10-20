import { FiMonitor } from "react-icons/fi";
import { PiArrowCircleDownRightThin } from "react-icons/pi";
import { LuPartyPopper } from "react-icons/lu";
import { RiChatSmileLine } from "react-icons/ri";


const Reasons = () => {
const cards=[
    {
      "title":"Enjoy on your TV",
      "para":"Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
      "icon": <FiMonitor />
    },
    {
      "title":"Download your shows to watch offline",
      "para":"Save your favourites easily and always have something to watch.",
      "icon":<PiArrowCircleDownRightThin />
    },
    {
      "title":"Watch everywhere",
      "para":"Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
      "icon":<LuPartyPopper />
    },
    {
      "title":"Create profiles for kids",
      "para":"Send kids on adventures with their favourite characters in a space made just for them — free with your membership.",
      "icon":<RiChatSmileLine />
    },
]

  return (
    <div className='pt-10 px-30 mt-5'>
       <div className='font-bold text-2xl mb-5'>
        More reasons to join
       </div>
     
    
      <div className='flex gap-5 '>
        {cards.map((card,index)=>{
        return(
            
<div className="w-80 h-70 p-6 rounded-2xl bg-linear-to-br from-[#1D1A3B] to-[#22131F] mt-1 relative">

  <div className="font-bold text-2xl text-white">
    {card.title}
  </div>

  <div className="text-[#D1D0DB] py-5">
    {card.para}
  </div>

  <div className="text-7xl right-0 mr-6 absolute bottom-0 mb-5 text-[#FF5BBE] ">
    {card.icon}
  </div>

</div>

        );
       })}
      </div>
    </div>
   
  )
}

export default Reasons
