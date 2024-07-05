import '../App.css';
import { FC } from 'react';
import { useState } from 'react';
import { useMenu } from '../Context/MenuContext';
import { useCart } from '../Context/CartContext';
import Logo from "../../public/crunchies-logo.webp"
import { Nav, Header, SignInBtn, TabsContainer, ItemsGrid, ItemCard, PriceBox, Blur} from "../styles/Menu.styled";
import { FaShoppingCart} from 'react-icons/fa';
// import image from '../assets/CFC0101712155161933.jpg';
// import images from '../utils/loadjsonImage';
// import menuData from '../menu.json';



const Menu: FC = () => {
    const [activeTab, setActiveTab] = useState<string>('All');
    const { menu } = useMenu();
    // const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
    const { addToCart, openCart, getTotalItemCount, isSummaryOpen, isCartOpen } = useCart();

     // Debug: log menu and cart state
     console.log('Menu:', menu);
     console.log('Total Item Count:', getTotalItemCount());


    const filteredItems = activeTab === 'All'
    ? menu.tabs.flatMap(category => category.items)
    : menu.tabs.find(category => category.category === activeTab)?.items || [];

   

  
    return (
        <>
          <Header>
                <Nav>
                    <img src={Logo} className="logo" alt="logo"/>
                    <div className='nav-sub-container'>
                        <div className='cart-count-container' onClick={openCart}>
                            <span>{getTotalItemCount()}</span>
                            <FaShoppingCart  className='cart'/>
                        </div>
                        {/* <p className='sign-in'>Sign In</p> */}
                        <SignInBtn>Sign In</SignInBtn>
                    </div>  
                </Nav>
          </Header>

          <TabsContainer>
                <ul>
                <li onClick={() => setActiveTab('All')}>All</li>
                {menu.tabs.map((category, index) => (
                    <li key={index} onClick={() => setActiveTab(category.category)}>
                    {category.category}
                    </li>
                ))}
                </ul>
          </TabsContainer>
          <ItemsGrid>
                {filteredItems.map((item, index) => (
                <ItemCard  key={index}>
                    {/* <img src={item.image} alt={item.name} /> */}
                    <img src={item.image} alt={item.name} />
                    <h2>{item.name}</h2>
                    
                    <PriceBox>
                        <div>
                            <span>Price</span>
                            <p>₦{item.price.toLocaleString()}</p>    
                        </div>
                        <button onClick={() => {addToCart(item) }}>Select</button>
                    </PriceBox>
                </ItemCard>
                ))}
           </ItemsGrid>
           {/* {isSummaryOpen || isCartOpen && <Blur className='blur'></Blur>} */}
           {(isSummaryOpen || isCartOpen) && <Blur className='blur'></Blur>}
           {/* <img src={rice} alt='image'/> */}
        </>
    )
    
}
export default Menu