import { motion } from 'framer-motion';

import { styles } from '../style';
// import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto' >
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`} >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className=' w-5 h-5 rounded-full bg-[#915eff]' />
          <div className=' w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div className=''>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'am <span className='text-[#915eff]'>M R SURAJ</span></h1>
          <p className={`${styles.heroSubText} mt-10 mb-2 text-white-100`}>
            I Create UI/UX Designs with front-end development expertise, specializing in React JS.<br  className='sm:block hidden' />
             {/* Skilled in designing intuitive, responsive interfaces that enhance user experience. Strong collaborator, focused
            on delivering high-quality digital products. */}
          </p>
         <button className='bg-slate-300 py-3 px-8 outline-none w-fit text-tertiary font-bold shadow-md shadow-primary lg:text-[20px] sm:text-[18px] xs:text-[17px] text-[16px] lg:leading-[18px] rounded-2xl '>
          <a
           href='M-R-SURAJ.pdf'
           download="M-R-SURAJ"           
           target='_blank' 
           rel="noreferrer"

          >
            Resume
          </a>
          
         </button>
        </div>
      </div>
      {/* <ComputersCanvas /> */}
      <div className=' absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
              <a href="#about" >
                <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-stretch items-start p-2 '  >
                <motion.div
                  animate={{
                    y: [0, 24, 0]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: 'loop'
                  }}
                  className="w-3 h-3 rounded-full bg-secondary mb-1"
                  />
                  </div>
              </a>
      </div>
    </section>
  )
}

export default Hero