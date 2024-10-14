import React, { useRef } from 'react'
import './Testimonial.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user1 from '../../assets/user-1.png'
import user2 from '../../assets/user-2.png'
import user3 from '../../assets/user-3.png'
import user4 from '../../assets/user-4.png'
const Testimonials = () => {
  
const slider = useRef();
  let tx =0;
  

    const slideForward =()=>{
          if(tx >-50){
            tx-=25;
          }
          slider.current.style.transform =`translateX(${tx}%)`
    }
    const slideBackward =()=>{
        if(tx <0){
            tx+=25;
          }
          slider.current.style.transform =`translateX(${tx}%)`
    }

  return (
    <div className='testimonials'>
     <img src={next_icon} className ='naxt-btn' alt="" onClick={slideForward} />   
     <img src={back_icon} className ='back-btn' alt=""  onClick={slideBackward}/>
     <div className="slider">
        <ul ref={slider}>
            <li>
                <div className='slide'>
                    <div className="user-info">
                     <img src={user1} alt="" />
                     <div>
                        <h3> Ria Singh</h3>
                        <span>Edusity, USA</span>
                     </div>
                     </div>
                     <p>
                     Chossing to pursue my degree at Edusity was one of 
                     the best decisions I've ever made. The suppoetive community, 
                      state-of-the-art facilities, and comitment to acedmic excellence have truly exceeded my expectations.
                     </p>
                </div>
            </li>
            <li>
                <div className='slide'>
                    <div className="user-info">
                     <img src={user2} alt="" />
                     <div>
                        <h3> Saurabh Kumar</h3>
                        <span>Edusity, USA</span>
                     </div>
                     </div>
                     <p>
                     This college offers a great balance between academics and extracurricular activities.
                      The professors are approachable, and the campus has a vibrant, inclusive 
                      culture. However, some of the facilities could use upgrading to match modern standards.
                     </p>
                </div>
            </li>
            <li>
                <div className='slide'>
                    <div className="user-info">
                     <img src={user3} alt="" />
                     <div>
                        <h3> Nandini mittal</h3>
                        <span>Edusity, USA</span>
                     </div>
                     </div>
                     <p>
                     A great place for both personal and academic growth. The campus life
                      is engaging, with many clubs and events. Classes are challenging but rewarding. More 
                     focus on internship opportunities would greatly benefit students preparing for the workforce.
                     </p>
                </div>
            </li>
            <li>
                <div className='slide'>
                    <div className="user-info">
                     <img src={user4} alt="" />
                     <div>
                        <h3> Nikunj Agrawal</h3>
                        <span>Edusity, USA</span>
                     </div>
                     </div>
                     <p>
                     The college has strong academic departments and well-structured courses.
                      The small class sizes create an interactive learning environment. Though overall 
                      student satisfaction is high, there  could be better support for international
                       students adjusting to campus life.
                     </p>
                </div>
            </li>
        </ul>
        </div> 
    </div>
  )
}

export default Testimonials
