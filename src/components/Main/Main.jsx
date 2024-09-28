import React from 'react';
import './Main.css';
import { assets } from '../../assets/assets';
const Main = () => {
  return (
    <div>
      <div className='main'>
        <div className='nav'>
          <p>Gemini</p>
          <img src={assets.user_icon} alt='' />
        </div>
        <div className='main-container'>
          <div className='greet'>
            <p>
              <span>Hello, Dev.</span>
            </p>
            <p>
              <span>How can I help you today.</span>
            </p>
          </div>
          <div className='cards'>
            <div className='card'>
              <p>Suggest beautiful places to see on upcoming road trip</p>
              <img src={assets.compass_icon} alt='' />
            </div>
            <div className='card'>
              <p>Briefly summarize this concept: Urban Planning</p>
              <img src={assets.bulb_icon} alt='' />
            </div>
            <div className='card'>
              <p>Brainstorm team bonding acitivites for our work retreat</p>
              <img src={assets.message_icon} alt='' />
            </div>
            <div className='card'>
              <p>Improve the readbility of the following code</p>
              <img src={assets.code_icon} alt='' />
            </div>
          </div>
          <div className='main-bottom'>
            <div className='search-box'>
              <input type='text' placeholder='Enter a prompt here' />
              <div>
                <img src={assets.gallery_icon} alt='' />
                <img src={assets.mic_icon} alt='' />
                <img src={assets.send_icon} alt='' />
              </div>
              <p className='bottom-info'>
                Gemini may display inaccurate info, including about people, so
                double-check its responses. Your privacy and Gemini Apps
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
