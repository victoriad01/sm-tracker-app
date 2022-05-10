import React from 'react'
import { cardData } from '../shopping/cardData'
import { useNavigate } from 'react-router-dom'

import {
  FaAngleUp,
  FaAngleDown,
  FaThumbsUp,
  FaAngleRight,
} from 'react-icons/fa'
import ActionAreaCard from '../card'

const Home = () => {
  let navigate = useNavigate()
  return (
    <>
      <div className='header'>
        <h1>
          For your Shopping/Market Experience Tracking...
          <FaAngleUp />
          <FaAngleDown />
        </h1>
      </div>

      <div className='mid-section'>
        <div className='welcome'>
          <h2>
            Welcome <FaThumbsUp />
          </h2>
        </div>
        <div className='welcometext1'>
          <p>
            Hey, welcome to our Marketplace / Shopping Tracker App. This app
            helps you to note all you want to buy with the intended price while
            you also have the opportunity to compare the real price after
            shopping to the projected price.<br></br>
            <br></br> Over time you can study the trend of your shopping
            experience with this special app. We hope you find this app useful
            and that it helps and enhances your shopping and market experience.
          </p>
        </div>
      </div>

      <h3>The App in summary</h3>
      <div className='cardColumn'>
        {cardData.map((appDetail) => (
          <ActionAreaCard key={appDetail.id} item={appDetail} />
        ))}
      </div>

      <div className='startButton'>
        <button
          className='getstartedbutton'
          onClick={() => {
            navigate('/shopping')
          }}
        >
          Get Started <FaAngleRight />
        </button>
      </div>
    </>
  )
}

export default Home
