import React from 'react'
import './footer.css'
import video from '../../Assets/video1.mp4'
import { FiChevronRight, FiSend } from 'react-icons/fi'
import { MdOutlineTravelExplore } from 'react-icons/md';
import { AiOutlineTwitter,AiOutlineInstagram,AiOutlineYoutube} from 'react-icons/ai';
import { FaTripadvisor } from 'react-icons/fa';

const Footer = () => {
  return (
    <section className='footer'>
      <div className="videoDiv">
        <video src={video} loop autoPlay muted type='video/mp4' ></video>
      </div>

     <div className="secContent container">
      <div className="contactDiv flex">
        <div className="text">
          <small>KEEP IN TOUCH</small>
          <h2>Travel With Us.</h2>
        </div>

        <div className="inputDiv">
          <input type='text'  placeholder='Enter Email Address' />
          <button className='btn flex' type='submit' >
            SEND <FiSend type='icon'/>
          </button>
        </div>

      </div>

      <div className="footerCard flex">
        <div className="footerIntro flex">
          <div className="logoDiv">
            <a href='#' className='logo flex'>
          <MdOutlineTravelExplore className='icon' />Travel.
          </a>
          </div>
          <div className="footerParagraph">
          Introducing our innovative Tour and Travel web application – your passport to seamless exploration! Discover breathtaking destinations, effortlessly plan itineraries, and book accommodations with just a few clicks. Our user-friendly interface ensures a stress-free travel experience, complete with real-time updates and personalized recommendations. Embark on unforgettable journeys as you navigate the world with ease, all within the palm of your hand. Welcome to a new era of travel convenience – your adventure begins here!
          </div>

          <div className="footerSocials">
            <AiOutlineTwitter className='icon'/>
            <AiOutlineYoutube className='icon'/>
            <AiOutlineInstagram className='icon'/>
            <FaTripadvisor className='icon'/>


          </div>
        </div>
        <div className="footerLinks grid">
          <div className="linkGroup">
            <span className='groupTitle'>
              OUR AGENCY
            </span>

            <li className='footerList flex'>
              <FiChevronRight className='icon'/>
              Services
            </li>

            <li className='footerList flex'>
              <FiChevronRight className='icon'/>
              Insurance
            </li>

            <li className='footerList flex'>
              <FiChevronRight className='icon'/>
              Agency
            </li>

            <li className='footerList flex'>
              <FiChevronRight className='icon'/>
              Tourism
            </li>
            <li className='footerList flex'>
              <FiChevronRight className='icon'/>
              Payment
            </li>

          </div>
        </div>
      </div>
     </div>
    </section>
  )
}

export default Footer