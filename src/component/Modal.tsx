import { FC } from 'react';
import {FaRegCheckCircle, FaTimes } from 'react-icons/fa';
import { useCart } from '../Context/CartContext';
import { motion } from 'framer-motion';

import styled from 'styled-components';

const Modal = styled(motion.div) `
   max-width: 400px;
   width: 90%;
   background-color: white;
   display: none;
   flex-direction: column;
   box-shadow: 0 1px 10px 0 rgba(0, 0, 0, .1), 0 2px 15px 0 rgba(0, 0, 0, .05);
   font-family: "Inter", sans-serif;
   position: fixed;
   left: 50%;
   z-index: 10;
   top: 10%;
   transform: translate(-50%, -50%);



   .exitModal{
     color: #757575;
     margin-top: 10px;
     margin-left: 10px;
   }

   .successTextContainer{
   display: flex;
   width: 100%;
   padding: 0 10px;
   margin: 10px 0;
        
        .checkIcon{
        //    color: #757575;
           color: #07BC0C;
        }
        p{
          margin-left: 10px;
          color: #757575;
        }
        
   }

   .bar{
   background-color: #07BC0C;
   width: 100%;
   height: 5px;
   }
`


const bounceFromTopAnimation = {
  initial: { y: -100, opacity: 0 },
  animate: { 
    y: [ -100, 0, -20, 0 ], // Keyframes for double bounce
    opacity: 1,
    translateX: '-50%', translateY: '-50%',
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
      duration: 0.6 // Adjust duration as needed
    }
  },
  exit: { 
    y: [0, -20, -100], // Keyframes for smooth exit
    opacity: 0,
    translateX: '-50%', translateY: '-50%',
    transition: {
      duration: 0.3 // Adjust duration as needed
    }
  }
};

export const SuccessModal: FC = () => {
    const { isSuccessModalVisible, hideSuccessModal } = useCart();

    return(
        <Modal  
        style={{ display: isSuccessModalVisible ? 'flex' : 'none' }}
        initial="initial"
        animate={isSuccessModalVisible ? "animate" : "exit"}
        variants={bounceFromTopAnimation}
        >
            <FaTimes className='exitModal' onClick={hideSuccessModal}/>
            <div className='successTextContainer'>
              <FaRegCheckCircle className='checkIcon'/>
              <p>Item quantity Increased in Cart!</p>
            </div>
            <div className='bar'></div>
        </Modal>
    )
}