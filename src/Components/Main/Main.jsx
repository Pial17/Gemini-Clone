import React from 'react';
import './Main.css';
import { assets } from '../../assets/assets';

const Main = () => {
    return (
        <div className='main'>
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon} alt=''/>
            </div>
            <div className="main-container">
                <div className="greet">
                    <p className='a'>Hello, Pial.</p>
                    <p className='b'>How can I help you?</p>
                </div>
                <div className="cards">
                    <div className="card">
                        <p>Suggest beautiful places to visit</p>
                        <img src={assets.compass_icon} alt=''/>
                    </div>
                    <div className="card">
                        <p>Suggest beautiful places to visit</p>
                        <img src={assets.bulb_icon} alt=''/>
                    </div>
                    <div className="card">
                        <p>Suggest beautiful places to visit</p>
                        <img src={assets.message_icon} alt=''/>
                    </div>
                    <div className="card">
                        <p>Suggest beautiful places to visit</p>
                        <img src={assets.code_icon} alt=''/>
                    </div>
                </div>
                <div className="text-here">
                    <input type='text'></input>
                    <img src={assets.gallery_icon} alt=''/>
                    <img src={assets.mic_icon} alt=''/>
                </div>
            </div>
        </div>
    );
};

export default Main;