import React from 'react'
import './main.css'
import {HiOutlineClipboardCheck, HiOutlineLocationMarker} from 'react-icons/hi'
import img from '../../Assets/image.jpg'
import img1 from '../../Assets/image1.jpg'
import img2 from '../../Assets/image2.jpg'
import img3 from '../../Assets/image3.jpg'
import img4 from '../../Assets/image4.jpg'
import img5 from '../../Assets/image5.jpg'
import img6 from '../../Assets/image6.jpg'
import img7 from '../../Assets/image7.jpg'
import img8 from '../../Assets/image8.jpg'





const Data = [
  {
   id:1,
   imgSrc: img,
   desTitle: 'Bora Bora',
   location: 'New Zealand',
   grade: 'CULTURAL RELAX',
   fees: '$700',
   description: 'The option of romance, bora Bora is one of the best travel description in the world.This place ins known for its luxurious stays and adventurous activities.'


  },

  {
    id:2,
    imgSrc: img1,
    desTitle: 'Saint Martin',
    location: 'Bangladesh',
    grade: 'CULTURAL RELAX',
    fees: '$600',
    description: 'The option of romance, bora Bora is one of the best travel description in the world.This place ins known for its luxurious stays and adventurous activities.'


   },

   {
    id:3,
    imgSrc: img2,
    desTitle: 'Great Barrier Reef',
    location: 'Australia',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The option of romance, bora Bora is one of the best travel description in the world.This place ins known for its luxurious stays and adventurous activities.'


   },
   {
    id:4,
    imgSrc: img3,
    desTitle: 'Cappadocia',
    location: 'Turkey',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The option of romance, bora Bora is one of the best travel description in the world.This place ins known for its luxurious stays and adventurous activities.'


   },
   {
    id:5,
    imgSrc: img4,
    desTitle: 'Guanajuato',
    location: 'Mexico',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The option of romance, bora Bora is one of the best travel description in the world.This place ins known for its luxurious stays and adventurous activities.'


   },
   {
    id:6,
    imgSrc: img5,
    desTitle: 'Cinque Terre',
    location: 'Italy',
    grade: 'CULTURAL RELAX',
    fees: '$840',
    description: 'The option of romance, bora Bora is one of the best travel description in the world.This place ins known for its luxurious stays and adventurous activities.'


   },
   {
    id:7,
    imgSrc: img6,
    desTitle: 'Angkor-Wat',
    location: 'Combodia',
    grade: 'CULTURAL RELAX',
    fees: '$790',
    description: 'The option of romance, bora Bora is one of the best travel description in the world.This place ins known for its luxurious stays and adventurous activities.'


   },
   {
    id:8,
    imgSrc: img7,
    desTitle: 'Taj Mahal',
    location: 'India',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The option of romance, bora Bora is one of the best travel description in the world.This place ins known for its luxurious stays and adventurous activities.'


   },
   {
    id:9,
    imgSrc: img8,
    desTitle: 'Bali Islam',
    location: 'Indonesia',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The option of romance, bora Bora is one of the best travel description in the world.This place ins known for its luxurious stays and adventurous activities.'


   },
   
]  
const Main = () => {
  return (
    <section className='main container section'>
     
      <div className="secTitle">
        <h3 className="title">
         Most visited destinations 
        </h3>
      </div>
       <div className="secContent grid">
          {
          Data.map(({id, imgSrc, desTitle, location, grade, fees, description})=>{
            return(
              <div key={id} className="singleDestination">
               <div className="imageDiv">
                <img src={imgSrc} alt={desTitle}/>
                
               </div>
               <div className="cardInfo">
                <h4 className='desTitle' >{desTitle}</h4>
                <span className='continent flex'>
                  <HiOutlineLocationMarker className='icon' />
                  <span className='name'>{location}</span>
                </span>
                <div className="fess flex">
                  <div className="grade">
                    <span>{grade}<small>+1</small></span>
                  </div>
                  <div className="price">
                    <h5>{fees}</h5>
                  </div>
                </div>
                <div className="desc">
                  <p>{description}</p>
                </div>
                <button className='btn flex' >
                  DETAILS <HiOutlineClipboardCheck className='icon'/>
                </button>
               </div>
            </div>
            )
            
          })
          }
       </div>
    </section>
  )
}

export default Main