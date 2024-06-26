import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'
import { div } from 'three/examples/jsm/nodes/Nodes.js'

const Footer = () => {
  return (
    <footer className='w-full pt-20 pb-10' id="contact">
      <div className='w-full absolute left-0 -bottoom-72 min-h-96'>
        <img
          src="/footer-grid.svg"
          alt="grid"
          className='w-ful h--full opaity-50' 
        />
      </div>

      <div className='flex flex-col items-center'>
        <h1 className='heading lg:max-w-[45vw]'>
          Let's make a  <span className='text-purple'>difference</span> in the digital world together
        </h1>
        <p className='text-white-200 md:mt-10 my-5 text-center'>Reach out to me to discuss further.</p>
        <a href='mailto:archanavnair90@gmail.com'>
          <MagicButton 
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position='right'
          />
        </a>
      </div>
      <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
        <p className='md:text-base text-sm md:text-normal font-light'>Copyright © 2024 Archana</p>
        <div  className='flex items-center md:gap-3 gap-6 mt-3'>
          {socialMedia.map((profile) => (
            <div key={profile.id} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
              <a href={profile.link} target="_blank">
                <img src={profile.img}  alt={profile.title} width={20} height={20}/>
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
