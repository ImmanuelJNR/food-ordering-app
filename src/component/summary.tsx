import { FC } from "react";
import { Summarycontainer, EmailContainer} from "../styles/summary.styled";
import { useCart } from '../Context/CartContext';
import {FaTimes} from 'react-icons/fa';
import { PaystackButton } from "react-paystack";



const bounceFromTopAnimation = {
    initial: { y: '-50vh', opacity: 0, translateX: '-50%', translateY: '-50%' },
    animate: { 
      y: [ -100, 0, -50, 0 ],
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
    const publicKey = "pk_test_d7f2cc1d6ea3a2c847271ef9617e7426f1362672"
    const { total, isSummaryOpen, closeSummary, email, setEmail } = useCart();
    const serviceCharge = 100;
    const deliveryCharge = 500;
    const grandTotal = total + serviceCharge + deliveryCharge;

    if (!isSummaryOpen) return null;

 

    const componentProps = {
      email, // Replace with actual customer email
      amount: grandTotal * 100, // Paystack expects amount in kobo (smallest unit of currency)
      publicKey,
      text: "Proceed To Payment",
      onSuccess: (reference: any) => {
        console.log(reference);
        // Handle success case
      },
      onClose: () => {
        console.log('Payment closed');
        // Handle close case
      },
    };

    const isEmailValid = email.trim() !== "";

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
            <hr/>
            <EmailContainer>
                <label htmlFor="email">Enter email to proceed</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </EmailContainer>
            {/* </div> */}
            {/* <PaymentBtn onClick={handlePayment}>Proceed to pay</PaymentBtn> */}
            {isEmailValid && (
            <PaystackButton {...componentProps} className="payStackBtn" />
            )}
      </Summarycontainer>
    )
}

export default Summary;