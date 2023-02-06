import React, { useContext, useEffect } from "react";
import "./Services.css";
import { themeContext } from "../../Context";
import Svg1 from "./Svg";

import Aos from "aos";
import "aos/dist/aos.css";
// import Resume from './resume.pdf';

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div
      className="services"
      id="services"
      data-aos-duration="5000"
      data-aos-delay="600"
    >
      <span
        style={{ color: darkMode ? "white" : "" }}
        className="about_me anim"
        data-aos="flip-left"
      >
        {" "}
        All{" "}
        <span data-aos="flip-left" className="me">
          About
        </span>{" "}
        Me
      </span>
      <div className="grid_about ">
        <div className="awesome " data-aos="slide-right">
          <ul >
            {/* <li>
              Hello! My name is Md Shahbaj Alam and I enjoy creating things that
              live on the internet.
            </li>
            <br />
            <li>
              I'm a passionate Developer, with strong administrative and
              communication skills, good attention to detail and the ability to
              write efficient code using MERN Stack.
            </li>
            <br />
            <li>
              My interest in web development started back last year when I was
              trying to edit things on the web, that taught me a lot about HTML
              & CSS.
            </li>
            <br />
            <li>
              As I grow and flourish as a Developer, one thing which keeps me
              going is my inquisitiveness for discovering new things every day.
            </li>
            <br />
            <li>
              Fast Forwarding to today, I built a number of web applications and
              5 major projects. and 20+ own Projects. Learned a great deal about
              teamwork, leadership, and communication. After months of rigorous
              training, here I am looking for an opportunity as a full stack web
              developer.
            </li>
            <br /> */}
            <div className="about_article anim" style={{fontSize:"20px",marginTop:"80px"}}>
              I am a creative, observing, analytical, and aspiring FULL-STACK
              WEB DEVELOPER from MASAI SCHOOL specializing in MERN STACK. Having
              the technical skills in HTML, CSS, javascript, react js, node js,
              and mongoo database,I have cloned several websites during my
              course duration here at Masai school.I am also a bachelor in mechanical engineering, even though I hold a bachelor's degree in
              mechanical engineering but my passion for information technology
              and computer science drag me to become a full-stack web developer.I have cloned Kimaye,Tanishq ,and Bigbasket. Here I was also
              groomed with soft skills.
            </div>
          </ul>
        </div>

        <Svg1 className="svg" data-aos="slide-left" />
      </div>
    </div>
  );
};

export default Services;
