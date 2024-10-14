import React from 'react'
import './About.css'
import about_img from '../../assets/about_akgec.jpg'
import play_icon from '../../assets/play-icon.png'
const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        {/* <img src={play_icon} alt="" className='play-icon' /> */}
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tommorow's Leaders Today</h2>

        <p>Embark on a transformatives education journey with our university's comprehensive 
          education program. Our cutting edge curriculam is designed to empower students 
          with the knowledge,skills, and experiences needed to excel in the dynamic field of 
        education.
        </p>
        <p>
        With a focus on innovation,hands-on lrarning, and personalized mentorship, our
        programs prepare aspiring educators to make a meaningful impact in classrooms, 
        schools, and communities.   
        </p>
        <p>
          Whether you aspire to become a teacher,administrator,counseler,or educational
          leader, our diverse range of programs offers the perfect pathway to achieve you 
          goals and unlock your full potential in shaping the future of education.
        </p>

      </div>
    </div>
  )
}

export default About
