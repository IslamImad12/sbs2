import React, { useState, useEffect } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import img1 from '../images/observation-urban-building-business-steel.jpg';
import img2 from '../images/cover2.jpg'; // استيراد خلفية أخرى كمثال
import img3 from '../images/cover5.jpg'; // استيراد خلفية أخرى كمثال
import main from '../images/build.png'; // استيراد خلفية أخرى كمثال


export default function Home() {
  // مصفوفة الخلفيات
  const backgrounds = [img1, img2, img3];
  
  // حالة الخلفية الحالية
  const [currentBackground, setCurrentBackground] = useState(backgrounds[0]);

  useEffect(() => {
    // دالة لتحديث الخلفية
    const changeBackground = () => {
      setCurrentBackground(prev => {
        const currentIndex = backgrounds.indexOf(prev);
        const nextIndex = (currentIndex + 1) % backgrounds.length;
        return backgrounds[nextIndex];
      });
    };

    // تعيين التحديث الدوري
    const intervalId = setInterval(changeBackground, 5000); // تغيير كل 5 ثواني

    // تنظيف التوقيت عند تفكيك المكون
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="home" >
      <div className="container">
        <div className="row">
          <div className="col-md-6 ">
          <div className="home-content">
          <h2 className='say'>
            <ReactTypingEffect
              text={['SBS-PHD']}  // Text to type
              speed={100}     // Typing speed
              eraseSpeed={50} // Erase speed
              eraseDelay={1000} // Delay before erasing
              typingDelay={500} // Delay before typing starts
              cursor={'|'}    // Custom cursor
              repeat={Infinity} // Infinite loop
              className="typing-effect"
            />
          </h2>
          <p className='text-white'>
            A website that provides consultations and services for 
            the creation and development of smart buildings. At different levels in the building, such as energy,
            lighting, etc.
          </p>
          <a className='btn btn-danger' href='#intro'>Get Started</a>
        </div>
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-center my-5"><img src={main} alt="" 
          className='d-flex align-items-center justify-content-center ' width={'550px'}/></div>
        </div>
      </div>
    </div>
  );
}
