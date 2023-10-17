import React from 'react'
import styled from "styled-components";
import Fade from 'react-reveal/Fade';

function Section({ title, description, backgroundImg, leftBtnText, rightBtnText, linkA, linkB
}) {
  
  return (
    <Wrap bgImage={backgroundImg}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
        
      </Fade>
        <Buttons>
          <Fade bottom>
        <ButtonGroup>
        <a href={linkA}><LeftButton>
            {leftBtnText} 
          </LeftButton></a>
          {rightBtnText && 
            <a href={linkB}><RightButton>
            {rightBtnText}
          </RightButton></a>
          
          }
          
        </ButtonGroup>
      </Fade>
      <DownArrow src="/images/down-arrow.svg" />
      </Buttons>
      
      
    </Wrap>
    
  )
}

export default Section
const Wrap = styled.div`
    
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;   ;
    background-image:url('/images/model-s.jpg');
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;

    background-image: ${props => `url("/images/${props.bgImage}")`}
    
    
  

`

const ItemText = styled.div`
    padding-top:15vh;
    text-align:center;
    color: #fff;

    text-shadow:
   -1.2px -1.2px 0 #000000,  
    1.2px -1.2px 0 #000000,
    -1.2px 1.2px 0 #000000,
     1.2px 1.2px 0 #000000;
`

const ButtonGroup=styled.div`
    display:flex;
    margin-bottom:30px;
    @media (max-width: 768px){
      flex-direction:column;
    }
    
    

`

const LeftButton=styled.div`
    background-color: #BF9F62;
    height:40px;
    width:256px;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:100px;
    color:rgba(0, 0, 0, 1);
    text-transform:uppercase;
    font-size:12px;
    cursor:pointer;
    margin:10px;
    
    
`
const RightButton = styled(LeftButton)`
      background-color:white;
      color:rgba(0, 0, 0, 1);
      
`

const DownArrow = styled.img`
    
    height:40px;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s;
    
    

`

const Buttons = styled.div`

`