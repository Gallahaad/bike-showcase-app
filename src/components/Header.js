import React, { useState } from "react";
import styled from "styled-components";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseIcon from '@mui/icons-material/Close';
import Home from './Home'



// import { Translate } from "@mui/icons-material";




function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  
  
  
  return (
  <Container>
    <a href="https://www.royalenfield.com/in/en/home/">
      <img src="/images/logo5.png" alt=""/>
    </a>

    <Menu>
      
        <a href="#super-meteor">Super Meteor 650</a>
        <a href="#himalayan">Himalayan 650</a>
        <a href="#continental">Continental GT 650</a>
        <a href="#meteor">Meteor 350</a>
        <a href="#classic">Classic 350</a>
        <a href="#hunter">Hunter 350</a>
        <a href="#accessories">Accessories</a>
     
    </Menu>

    <RightMenu>
      <a href="https://makeityours.royalenfield.com/configurator">Customize</a>
      <a href="https://www.royalenfield.com/in/en/home/">Shop</a>
      
      <CustomDiv><CustomMenu onClick={()=>setBurgerStatus(true)} /></CustomDiv>


    </RightMenu>

    <BurgerNav show={burgerStatus}>
      <CloseWrapper>
        <CustomClose onClick={()=>setBurgerStatus(false)} />
      </CloseWrapper>
      
        <li><a href="#super-meteor">Super Meteor 650</a></li>
        <li><a href="#himalayan">Himalayan 650</a></li>
        <li><a href="#continental">Continental GT 650</a></li>
        <li><a href="#meteor">Meteor 350</a></li>
        <li><a href="#classic">Classic 350</a></li>
        <li><a href="#hunter">Hunter 350</a></li>
        <li><a href="#accessories">Accessories</a></li>
        <li><a href="https://www.royalenfield.com/in/en/support/contact-us/">Contact</a></li>
        
        
      
      
    </BurgerNav>

  </Container>
    );
}

export default Header;

const Container = styled.div`
    min-height:60px;
    position:fixed;
    background:rgba(0, 0, 0, 0.8);

    display:flex;
    align-items:center;
    justify-content:space-between;
    padding: 0 20px;
    top:0;
    left:0;
    right:0;
    z-index: 1;
    
    a img{
      height:24;
      width:100;    
    }
    

`
const CustomDiv = styled.div`
    background-color:#fff;
    display:flex;
    
    border-radius:50%;
    opacity:0.85;

`
const Menu = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex: 1;
    

    a{
      font-weight:600;
      font-size:13px;
      text-transform:uppercase;
      padding: 0 10px;
      flex-wrap:nowrap;
      color:#fff;
      
    }

    @media(max-width:768px){
      display:none;

    }

`
const RightMenu = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;

    a{
      font-weight:600;
      font-size:13px;
      text-transform:uppercase;
      margin-right:10px;
      color:#fff;
    }

`

const CustomMenu = styled(MenuRoundedIcon)`
    cursor:pointer;
    color:rgba(0, 0, 0, 0.8);
    
    
    



`

const BurgerNav = styled.div`
    position:fixed;
    top:0;
    bottom:0;
    right:0;
    background-color:#fff;
    width:300px;
    z-index:10;
    padding:20px;
    list-style:none;
    display:flex;
    flex-direction:column;
    text-align:start;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.2s ;
    
    li{
      padding: 15px 0;
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);

      a{
        font-weight:900;
        color:rgba(0, 0, 0, 1);

      }
      a:hover{
        text-decoration:underline;
      }
    }
    
`

const CustomClose = styled(CloseIcon)`
    cursor:pointer;




`

const CloseWrapper = styled.div`
      display:flex;
      justify-content:flex-end;


`