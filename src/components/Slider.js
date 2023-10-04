import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';


const Slider = () => {
    const images = [
        "https://media.discordapp.net/attachments/804063971405070356/1157960303544377405/IMG_5490.jpg?ex=651a8212&is=65193092&hm=ee17df27a10e43b183c1ebd7af3ce9e6fdb028e5932b4b17d95b1438e30ac432&=&width=1440&height=401",
        "https://media.discordapp.net/attachments/804063971405070356/1157963146879836240/IMG_5493.jpg?ex=651a84b8&is=65193338&hm=2a92d0d73650c334c17fcea9217ac361d7e920f6d9c01adc60a3582d5c8170b2&=&width=1440&height=401",
        "https://media.discordapp.net/attachments/804063971405070356/1157965646630486096/IMG_5494.jpg?ex=651a870c&is=6519358c&hm=fb3c634c70f16484b4ec274f20eb717de87b36a5ac095b3f3d05c993e4ab8b14&=&width=1440&height=397",

    ];

    return (
        <div>
            <Slide className='grid md:grid-cols-3 gap-4 sm:grid-cols-1'>
                <div className="each-slide-effect">
                    <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                
                    </div>
                </div>
                <div className="each-slide-effect">
                    <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                    
                    </div>

                </div>
                <div className="each-slide-effect">
                    <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                
                    </div>
                </div>
            </Slide>
        </div>
    )
};

export default Slider;