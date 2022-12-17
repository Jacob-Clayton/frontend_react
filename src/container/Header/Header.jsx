import React from 'react';
import { motion } from 'framer-motion';
import {BsChevronDoubleDown} from 'react-icons/bs'
import { AppWrap } from '../../wrapper'
import './Header.scss';

const Header = () => {

  return (
    <motion.section 
    id='homePage' 
    className='homeSection'
    whileInView={{ opacity: [0, 1] }}
    transition={{ duration: 0.5 }}
    >
      <div className='container homeContainer'>

        <span className='introText'>
          Hi, my name is
        </span>

        <h1 className='title'>
          Jacob Clayton
        </h1>

        <span className="subTitle">
          Data Analyst and Full-Stack Developer.
        </span>

        <p className='homeParagraph'>
        Transforming data into actionable intelligence.
          <br/>I love coding cool things.
        </p>

        <div className="scrollDiv">
          <motion.a 
          href="#about" 
          className="flex"
          whileInView={{ opacity: [0, 1] }}
          whileTap={{opacity: 0.2, scale: 0.95}}
          transition={{duration: 4}}
          >
            <BsChevronDoubleDown className="icon"/>
          </motion.a>
        </div>

      </div>
    </motion.section>
  );
}

export default AppWrap(Header, 'home');