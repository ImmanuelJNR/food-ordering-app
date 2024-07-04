import { FC } from "react";
import { Summarycontainer, PaymentBtn } from "../styles/summary.styled";
import { useCart } from '../Context/CartContext';
import {FaTimes} from 'react-icons/fa';
// import {motion} from "framer-motion";



const bounceFromTopAnimation = {
    initial: { y: '-50vh', opacity: 0, translateX: '-50%', translateY: '-50%' },
    animate: { 
      y: [ -100, 0, -50, 0 ],
    //   y: [ -50, 0, -30, 0 ], // Keyframes for double bounce
      opacity: 1,
      translateX: '-50%', translateY: '-50%',
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        duration: 0.1 // Adjust duration as needed
      }
    },
    exit: { 
        
      y: [0, -50, -100], // Keyframes for smooth exit
      opacity: 0,
      translateX: '-50%', translateY: '-50%',
      transition: {
        duration: 0.3 // Adjust duration as needed
      }
    }
};


const Summary: FC = () => {
    const { total, isSummaryOpen, closeSummary } = useCart();
    const serviceCharge = 144.25;
    const deliveryCharge = 1000;
    const grandTotal = total + serviceCharge + deliveryCharge;

    if (!isSummaryOpen) return null;

    return(
        <Summarycontainer 
        style={{ display: isSummaryOpen ? 'flex' : 'none' }}
        initial="initial"
        animate={isSummaryOpen ? "animate" : "exit"}
        variants={bounceFromTopAnimation}
        >
            <FaTimes onClick={closeSummary} className="exitSummary"/>
            <h3>Summary</h3>
            {/* <div> */}
            <hr/>
            <div className="box">
                <p>Products</p>
                <p>NGN {total}</p>
            </div>
            <div  className="box">
                <p>Service charge</p>
                <p>NGN {serviceCharge}</p>
            </div>
            <div  className="box">
                <p>Delivery charge</p>
                <p>NGN {deliveryCharge}</p>
            </div>
            <div  className="Total-box">
                <p>Total</p>
                <p>NGN {grandTotal}</p>
            </div>
            {/* </div> */}
            <PaymentBtn onClick={closeSummary}>Proceed to pay</PaymentBtn>
        </Summarycontainer>
    )
}

export default Summary;