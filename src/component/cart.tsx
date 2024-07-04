import { FC } from 'react';
import { Cartcontainer, BtnContainer, CheckoutBtn, Itemdescription, Itemwrapper,CountAndExit, NocartItemContainer } from '../styles/cart.styles';
import { FaTrash, FaTimes } from 'react-icons/fa';
import { useCart } from '../Context/CartContext';
import { motion } from "framer-motion";





const Cart: FC= () => {
    const { cartItems, removeFromCart, updateItemCount, isCartOpen, closeCart, total, openSummary } = useCart();

    const handleDecrement = (index: number) => {
        
        const item = cartItems[index];
        if (item.count > 1) {
          updateItemCount(index, item.count - 1);
        }
        
    }
    const handleIncrement = (index: number) => {

        const item = cartItems[index];
        updateItemCount(index, item.count + 1);
    }

    const handleCheckout = () => {
        closeCart();
        openSummary();
    };



    const variants = {
        open: { x: 0 },
        closed: { x: "100%" }
    };

    

    if (!isCartOpen) return null;

    
 
    return (

            <Cartcontainer
            as={motion.div}
            initial="closed" // Initial animation variant
            animate={isCartOpen ? "open" : "closed"} // Animate based on isCartOpen state
            variants={variants} // Animation variants
            transition={{ duration: 0.3 }} // Animation duration

            >

                <CountAndExit>
                    <div onClick={closeCart}><FaTimes className='exit'/></div>
                    {/* <h2><span></span>Item at the price Of<span></span></h2> */}
                </CountAndExit>
                {cartItems.length === 0 ? (
                    <NocartItemContainer>
                        <p>You don't have any product in your cart at the moment</p>
                    </NocartItemContainer>
                ) : (

                    <>

                        {cartItems.map((item,index) => (
                            
                            <Itemwrapper key={item.id}>

                                    <div className='item'>
                                        <Itemdescription>
                                            <img src={item.image} alt={item.name} />
                                            <div>
                                                <p className='name'>{item.name}</p>
                                                <p className='category'>{item.category}</p>
                                            </div>
                                        </Itemdescription>
                                        <FaTrash onClick={() => removeFromCart(index)} className='trashIcon'/>
                                    </div>

                                <div className='PriceAndBtnContainer'>
                                    <p>₦{item.price}</p>
                                    {/* <p>₦{item.price * item.count}</p> */}
                                    <BtnContainer>
                                        <button onClick={()=>handleDecrement(index)}>-</button>
                                        <p>{item.count}</p>
                                        <button onClick={()=>handleIncrement(index)}>+</button>
                                    </BtnContainer>
                                </div>
                            </Itemwrapper>
                         ))}

                        <div className='totalBox'>
                            <p>Total</p>
                            {/* <p>₦{cartItems.reduce((total, item) => total + item.price, 0)}</p> */}
                            {/* <p>₦{calculateTotal()}</p>
                            */}
                            <p>₦{total}</p>
                        </div>
                        <CheckoutBtn onClick={handleCheckout}>Checkout</CheckoutBtn>
                    </>
                )}     
            </Cartcontainer>
    )



    
}

export default Cart