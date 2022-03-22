import React from 'react'
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
            Hey, welcome to our Marketplace/Shopping Tracker App. This app helps
            you to note all you want to buy with the intended price while you
            also have the opportunity to compare the real price after shopping
            to the projected price. Over time you can study the trend of your
            shopping experience with this special app. We hope you find this app
            useful and that it helps and enhances your shopping and market
            experience.
          </p>
          <button
            className='getstartedbutton'
            onClick={() => {
              navigate('/login')
            }}
          >
            Get Started <FaAngleRight />
          </button>
        </div>
      </div>
      <div className='row'>
        <h2>The App in summary</h2>
        <div className='column'>
          <ActionAreaCard />
        </div>
        <div className='column'>
          <ActionAreaCard />
        </div>
        <div className='column'>
          <ActionAreaCard />
        </div>
        <div className='column'>
          <ActionAreaCard />
        </div>
      </div>
    </>
  )
}

export default Home
