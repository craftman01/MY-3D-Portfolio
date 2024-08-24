import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../style'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

import { SectionWrapper } from '../hoc'

const ServiceCard = ( {index, title, icon} ) => {
  return (
    <Tilt className="xs:w-[250px] w-full" >
      <motion.div 
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div 
        options={{
          max:45,
          scale: 1,
          speed: 450
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col '
        >
          <img src={icon} alt={title} className=' w-16 h-16 object-contain '/>
            <h3 className='text-white text-[20px] font-bold text-center' >{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
      >
        <p className={styles.sectionSubText}>
          Introduction
        </p>
        <h2 className={styles.sectionHeadText}>
          Overview.
        </h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.01, 1)}
        className=' mt-4 text-secondary text-[17px] max-w-7xl leading-[30px] '
      >
       I'm a passionate frontend developer 💻 with a flair for JavaScript, React, Vue.js, and Node.js. 🚀<br />

Transforming ideas into smooth, user-friendly digital experiences is what I do best. ✨ I'm always excited to learn new technologies 🔍 and love collaborating to solve real-world problems through code. 🤝<br/>

Got an innovative project in mind? Let's team up! 🤓 I'll bring my technical skills and creative problem-solving to the table. Together, we can craft efficient, scalable web solutions that make a real impact. 💡<br/>

Ready to bring your digital vision to life? Let's connect and start building something great! 🌟

      </motion.p>
        <div className=' mt-20 flex flex-wrap gap-10 ' >
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>


    </>
  )
}

export default SectionWrapper(About, "about")