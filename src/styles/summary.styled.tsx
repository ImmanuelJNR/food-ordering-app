import styled from "styled-components"
import { motion } from 'framer-motion';

export const Summarycontainer = styled(motion.div)`
   max-width: 400px;
   width: 90%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   position: fixed;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   padding: 15px;
   font-family: "Inter", sans-serif;
   background-color: #FFFF;
   z-index: 999;
   border: 1px solid #ddd;
   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

   .exitSummary{
   margin-bottom: 10px;
   cursor: pointer;
   }

   h3{
   margin-bottom: 20px;
   }

   hr{
    border: none;
   background-color: #e5e7eb;
   height: 1px;
   }

   .box{
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin: 10px 0;
   font-size: 0.8rem;
   
   }

   .Total-box{
   font-weight: bold;
   font-size: 1rem;
    display: flex;
   justify-content: space-between;
   align-items: center;
   margin: 10px 0;

   }
`
export const PaymentBtn = styled.button`
   width: 100%;
   padding: 15px 0;
   border-radius: 30px;
   border: 1px solid transparent;
   background-color: #179F83;
   color: #FFFF;
   margin-top: 20px;
   cursor: pointer;

`
