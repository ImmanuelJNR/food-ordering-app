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

   .payStackBtn{
   width: 100%;
   padding: 15px 0;
   border-radius: 30px;
   border: 1px solid transparent;
   background-color: #179F83;
   color: #FFFF;
   // margin-top: 20px;
   cursor: pointer;
   }
`
export const EmailContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 15px 0;

   label{
   //  text-align: start;
    margin-bottom: 10px;
    font-weight: bold;
    font-size: 0.8rem;
   }

   input{
     width: 100%;
     border-radius: 20px;
     padding-top: 10px;
     padding-bottom: 10px;
     padding-left: 10px;
     border-radius: 20px;
     background-color: transparent;
     border: 1px solid black;
     outline: none;
     font-weight: 500;
     font-size: 0.85rem;
   }
   input:focus {
      outline: none;
      border: 2px solid black;
   }

`
