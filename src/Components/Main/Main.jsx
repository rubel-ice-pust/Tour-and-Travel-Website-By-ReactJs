import React from 'react'
import './main.css'
import img from '../../Assets/image.jpg'



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

  // {
  //   id:2,
  //   imgSrc: img2,
  //   desTitle: 'Bora Bora',
  //   location: 'New Zealand',
  //   grade: 'CULTURAL RELAX',
  //   fees: '$700',
  //   description: 'The option of romance, bora Bora is one of the best travel description in the world.This place ins known for its luxurious stays and adventurous activities.'


  //  },

  //  {
  //   id:3,
  //   imgSrc: img3,
  //   desTitle: 'Bora Bora',
  //   location: 'New Zealand',
  //   grade: 'CULTURAL RELAX',
  //   fees: '$700',
  //   description: 'The option of romance, bora Bora is one of the best travel description in the world.This place ins known for its luxurious stays and adventurous activities.'


  //  },
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
            </div>
            )
            
          })
          }
       </div>
    </section>
  )
}

export default Main