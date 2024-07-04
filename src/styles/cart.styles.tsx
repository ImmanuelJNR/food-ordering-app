import styled from "styled-components"

export const Cartcontainer = styled.div `
   width: 100%;
   max-width: 500px;
   flex-direction: column;
   align-items: center;
   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
   position: fixed;
   top: 0%;
   height: 100vh;
   z-index: 999;
   right: 0%;
   background-color: #FFFF;
   font-family: "Inter", sans-serif;
   overflow-Y: auto;
   background-color: rgb(229 231 235)

    &::-webkit-scrollbar {
    display: none;
   }

    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */

   .PriceAndBtnContainer{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding:  15px;

        p{
           font-weight: 600;
        }
   }

   .totalBox {
        display: flex;
        justify-content: space-between;
        padding: 15px;
   }
`

export const CountAndExit = styled.div`
   width: 100%;
   background-color: rgb(229 231 235);
   padding-top: 20px;
   padding-bottom: 20px;
   padding-left: 20px;

   div{
   height: 50px;
   width: 50px;
   background-color: #FFFF;
   display: flex;
   justify-content: center;
   align-items: center;
   border-radius: 50px;
   cursor: pointer;
   margin-bottom: 20px;

   .exit{
   font-size: 1.2rem;
//    font-weight: 300;
   }

   }
`

export const BtnContainer = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color:  rgb(229 231 235);
    border-radius: 50px;
    padding: 10px;
    // width: 10%;
    gap: 15px;
    
    p{
    padding: 0 10px;
    }

    button{
    background-color: transparent;
    border: 1px solid transparent;
    font-size: 1.1rem;
    cursor: pointer;
    }

`

export const CheckoutBtn = styled.div `
    background-color: #E90C31;
    color: #FFFF;
    padding: 15px 20px;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    font-size: 1.2rem;
    cursor: pointer;
    margin: 20px 15px;
`


export const Itemwrapper = styled.div `
   display: flex;
   padding: 0 20px;
   flex-direction: column;
   width: 100%;
   border-bottom:  2px solid rgb(229 231 235); 

    .item{
    display: flex;
    padding:  15px;
    justify-content: space-between;
    align-items: center;
    border-bottom:  1px solid rgb(229 231 235); 

        .trashIcon{
        cursor: pointer;
        color: #E90C31;
        
        }

    }
`

export const Itemdescription = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;

   img{
   width: 100px;
   height: 80px;
   object-fit: cover;

   }

   div{
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-left: 10px;

        .name{
           font-weight: 600;
           font-size: 1.1rem;
        }

   }
`

export const NocartItemContainer = styled.div`
  width: 100%;
  padding: 0 20px;
  font-family: "Rakkas", serif;
  text-align: center;
  position: fixed;
  top: 50%;
  font-weight: 600;
  font-size: 1.3rem;

`