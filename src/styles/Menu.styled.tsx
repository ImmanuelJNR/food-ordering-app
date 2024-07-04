import styled from "styled-components"

export const Header = styled.header `
display: flex;
justify-content: center;
font-family: "Inter", sans-serif;

`

export const Nav = styled.nav `
width: 85%;
display: flex;
justify-content: space-between;
margin: 20px 0;

.logo{
width: 100px;
height: auto;
}



.nav-sub-container{
  display: flex;
  align-items: center;

  .sign-in{
    padding: 0 10px;
  }


}

.cart-count-container{
  position: relative;
  display: inline-block;
  cursor: pointer;
  margin-right: 30px;


  span{
    position: absolute;
    top: -10px;
    right: -10px;
    background: #92071F;
    color: white;
    border-radius: 50%;
    height: 1rem;
    width: 1rem;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px; /* Adjust the size of the number */
  }
}

`

export const SignInBtn = styled.button`
    background-color: #E90C31;
    border: 1px solid transparent;
    border-radius: 20px;
    padding: 10px 15px;
    color: #FFFF;
    cursor: pointer;
`

export const TabsContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 30px;
    font-family: "Inter", sans-serif;


    ul{
        display: flex;
        list-style-type: none;
        gap: 20px;
        cursor: pointer;
        flex-wrap: wrap;

        li{
           color: #92071F;
           font-weight: 400;
           text-transform: uppercase;
        }

    @media only screen and (max-width: 900px){
    width: 80%;
    }

    }
`


export const ItemsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  padding: 2rem;
  font-family: "Inter", sans-serif;

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);

    gap: 10px;
    padding-left: 10px;
    padding-right: 10px;
  }
`;

export const ItemCard = styled.div`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden; 

  img {
    max-width: 100%;
    width: 100%;
    border-top-radius: 8px;
    height: 200px;
    object-fit: cover;
    // border-radius: 8px;
  }

  h2 {
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 15px;
    font-size: 1rem;
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const PriceBox = styled.div`
  // border: 1px solid red;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  margin-bottom: 15px;

  span{
  color: #9CA3AF;
  font-size: 0.7rem;
  font-weight: 500;
  }

  p{
  color: #FF5C00;
  font-weight: bold;
  font-size: 0.8rem;
  }

  button{
  color: #E90C31;
  background-color:  rgb(229 231 235);
  border: 1px solid transparent;
  padding: 10px 12px;
  border-radius: 20px;
  cursor: pointer;
  }
`
export const Blur = styled.div ` 

  backdrop-filter: blur(5px);
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
`


