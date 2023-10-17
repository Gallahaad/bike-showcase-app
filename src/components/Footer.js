import React from 'react';
import styled from "styled-components";

function Footer() {
  return (
    <Wrap>
        <p>Developed by Utkarsh Misra</p>
        <div>
            <a href='https://github.com/Gallahaad'><img width="35" height="35" src="https://img.icons8.com/ios/50/FFFFFF/github--v1.png" alt="github--v1"></img></a>
            <a href='https://www.linkedin.com/in/utkarsh-priya-misra-69699414b/'><img width="35" height="35" src="https://img.icons8.com/ios/35/FFFFFF/linkedin.png" alt="linkedin"/></a>
        </div>
    </Wrap>
  )
}

export default Footer

const Wrap = styled.div`
    min-height:60px;
    background:rgba(0, 0, 0, 0.85);
    color:#fff;
    display:flex;
    align-items:center;
    justify-content:space-around;
    
    div{
        display:flex;
        
    }
    div a{
        margin: 0 5px;
    }
    
    
`