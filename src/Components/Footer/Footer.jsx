import React, { useEffect } from 'react'
import './footer.css'
import video from '../../Assets/video1.mp4'
import { FiChevronRight, FiSend } from 'react-icons/fi'
import { MdOutlineTravelExplore } from 'react-icons/md';
import { AiOutlineTwitter,AiOutlineInstagram,AiOutlineYoutube} from 'react-icons/ai';
import { FaTripadvisor } from 'react-icons/fa';
import Aos from 'aos'
import 'aos/dist/aos.css'


const Footer = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
   },[])

  return (
    <section className='footer'>
      <div className="videoDiv">
        <video src={video} loop autoPlay muted type='video/mp4' ></video>
      </div>

     <div className="secContent container">
      <div className="contactDiv flex">
        <div data-aos="fade-up" className="text">
          <small>KEEP IN TOUCH</small>
          <h2>Travel With Us.</h2>
        </div>

        <div className="inputDiv">
          <input data-aos="fade-up" type='text'  placeholder='Enter Email Address' />
          <button data-aos="fade-up" className='btn flex' type='submit' >
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
          <div data-aos="fade-up" className="footerParagraph">
          Introducing our innovative Tour and Travel web application – your passport to seamless exploration! Discover breathtaking destinations, effortlessly plan itineraries, and book accommodations with just a few clicks. Our user-friendly interface ensures a stress-free travel experience, complete with real-time updates and personalized recommendations. Embark on unforgettable journeys as you navigate the world with ease, all within the palm of your hand. Welcome to a new era of travel convenience – your adventure begins here!
          </div>

          <div data-aos="fade-up" className="footerSocials flex">
            <AiOutlineTwitter className='icon'/>
            <AiOutlineYoutube className='icon'/>
            <AiOutlineInstagram className='icon'/>
            <FaTripadvisor className='icon'/>


          </div>
        </div>

        <div className="footerLinks grid">

          {/* Group One */}
          <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
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

           {/* Group Two */}
           <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
            <span className='groupTitle'>
              PARTNERS
            </span>

            <li className='footerList flex'>
              <FiChevronRight className='icon'/>
              Bookings
            </li>

            <li className='footerList flex'>
              <FiChevronRight className='icon'/>
              Rentcars
            </li>

            <li className='footerList flex'>
              <FiChevronRight className='icon'/>
              HotelWorld
            </li>

            <li className='footerList flex'>
              <FiChevronRight className='icon'/>
              Trivago
            </li>
            <li className='footerList flex'>
              <FiChevronRight className='icon'/>
              TripAdvisor
            </li>

          </div>

           {/* Group Three */}
           <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
            <span className='groupTitle'>
              LAST MINUTE
            </span>

            <li className='footerList flex'>
              <FiChevronRight className='icon'/>
              London
            </li>

            <li className='footerList flex'>
              <FiChevronRight className='icon'/>
              California
            </li>

            <li className='footerList flex'>
              <FiChevronRight className='icon'/>
              Indonesia
            </li>

            <li className='footerList flex'>
              <FiChevronRight className='icon'/>
              Europe
            </li>
            <li className='footerList flex'>
              <FiChevronRight className='icon'/>
              Oceania
            </li>

          </div>
          
        </div>
        <div className="footerDiv flex">
          <small>BEST TRAVEL WEBSITE THEME</small>
          <small>COPYRIGHTS RESERVED -MD. RUBEL HOSSAIN 2023</small>
        </div>
      </div>
     </div>
    </section>
  )
}

export default Footer