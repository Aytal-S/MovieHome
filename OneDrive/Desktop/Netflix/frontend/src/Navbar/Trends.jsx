import trend1 from '../assets/images1.jpg'
import trend2 from '../assets/images2.jpg'
import trend3 from '../assets/images3.jpg'
import trend4 from '../assets/images4.jpg'
import trend5 from '../assets/images5.jpg'
import trend6 from '../assets/images6.jpg'
import trend7 from '../assets/images7.jpg'
import trend8 from '../assets/images8.jpg'
import trend9 from '../assets/images9.jpg'
import trend10 from '../assets/images10.jpg'
import CurveLine from "./CurveLine";
const Trends = () => {
  const movies = [
    { id: 1, url: trend1 },
    { id: 2, url: trend2 },
    { id: 3, url: trend3 },
    { id: 4, url: trend4 },
    { id: 5, url: trend5 },
    { id: 6, url: trend6 },
    { id: 7, url: trend7 },
    { id: 8, url: trend8 },
    { id: 9, url: trend9 },
    { id: 10, url: trend10 },
  ];
  return (
    <div>
      <CurveLine/>
    
    <div className="pt-10 px-30  bg-black text-white items-center ">

            <div className="font-bold text-2xl">
                Trending now
            </div> 

              <div className='flex gap-12 overflow-x-auto hide-scrollbar mt-1 ml-10'>
               {movies.map((movie,index)=>{
                return( 
                <div key={movie.index} 
                className=' pt-5 relative shrink-0 w-50 transition-transform ease-in-out duration-500 hover:scale-110'>
                  <div className='w-full h-70 overflow-hidden rounded-2xl'>
                  <img src={movie.url} alt={'Trending ${movie.id}'}
                   className=' w-full h-full object-cover'/>
                   </div>
                  <div className='text-9xl font-bold border-amber-50 absolute bottom-0 -left-5 text-stroke-white '>
                     {movie.id}
                  </div>
               </div>);
               })}

                
              </div>
    </div>
    </div>
  )
}

export default Trends