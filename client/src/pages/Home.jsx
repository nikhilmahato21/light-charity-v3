import { Link } from "react-router-dom";
import hero from "../assets/HeroImg.svg"

const Home = () => {
  return (
    <>
<div className=' grid grid-cols-1 lg:grid-cols-2 gap-24 items-center'>
      <div>
        <h1 className='max-w-2xl text-4xl font-bold tracking-tight  sm:text-5xl '>
        “Share the gift of life.”
        </h1>

        <p className='mt-8 max-w-xl text-lg leading-8'>
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
          aliqua. Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
          qui lorem cupidatat commodo.
        </p>
        <div className='mt-10 '>
          <Link  className='btn m-2 btn-primary '>
          Go to Hospitals
          </Link>
          <Link  className='btn m-2 btn-primary '>
          Go to Bloodbanks
          </Link>
        </div>
      </div>
      <div className='hidden  h-[28rem]  lg:carousel   p-4 space-x-4 rounded-box'>
          <img src={hero} alt="" />
      </div>

    </div>

  


    </>
 
    
  );
};

export default Home;