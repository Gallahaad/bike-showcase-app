import React from "react";
import styled from "styled-components";
import Section  from "./Section";
import Footer from "./Footer"
import Header from "./Header";


function Home() {
  return (
    <Container>
           
            <Header/>
            <div id="super-meteor"><Section 
                id="super-meteor"
                title="Super Meteor 650"
                description="THE QUINTESSENTIAL CRUISER"
                backgroundImg="Super Metero 650.jpg"
                leftBtnText="Book"
                rightBtnText="Specifications"
                linkA="https://makeityours.royalenfield.com/configurator/supermeteor-650"
                linkB="https://www.royalenfield.com/in/en/motorcycles/super-meteor-650/"  

            /></div>
            <div id="himalayan"><Section 
                
                title="Himalayan 411"
                description="Born in the Himalayas"
                backgroundImg="Himalyan 650.jpg"
                leftBtnText="Book"
                rightBtnText="Specifications"
                linkA="https://makeityours.royalenfield.com/configurator/Himalayan"
                linkB="https://www.royalenfield.com/in/en/motorcycles/himalayan/"     
            /></div>
            <div id="continental"><Section 
                title="Continental GT 650"
                description="Built like a Gun, goes like a Bullet"
                backgroundImg="Continental GT 650.jpg"
                leftBtnText="Book"
                rightBtnText="Specifications"   
                linkA="https://makeityours.royalenfield.com/configurator/continental-gt-650"
                linkB="https://www.royalenfield.com/in/en/motorcycles/continental-gt/"    
            /></div>
            <div id="meteor"><Section 
                title="Meteor 350"
                description="The Spirit Of The Cruise"
                backgroundImg="Meteor 350.jpg"
                leftBtnText="Book"
                rightBtnText="Specifications"    
                linkA="https://makeityours.royalenfield.com/configurator/meteor-350"
                linkB="https://www.royalenfield.com/in/en/motorcycles/meteor/"   
            /></div>
            <div id="classic"><Section
                title="Classic 350"
                description="Awaken Your Senses"
                backgroundImg="Classic 350.jpg"
                leftBtnText="Book"
                rightBtnText="Specifications"
                linkA="https://makeityours.royalenfield.com/configurator/classic-350"
                linkB="https://www.royalenfield.com/in/en/motorcycles/classic-350/"       
            /></div>
            <div id="hunter"><Section
                title="Hunter 350"
                description="All the intense flavours of pure motorcycling packed into a fun, stylish, new machine"
                backgroundImg="Hunter 350.jpg"
                leftBtnText="Book"
                rightBtnText="Specifications"
                linkA="https://makeityours.royalenfield.com/configurator/hunter-350"
                linkB="https://www.royalenfield.com/in/en/motorcycles/hunter-350/"       
            /></div>
            <div id="accessories"><Section
                title="Accessories"
                description=""
                backgroundImg="accessories.jpg"
                leftBtnText="Shop now"
                linkA="https://www.royalenfield.com/in/en/apparel/"
                
                
            /></div>
            <Footer/>
    </Container>
    
    
    );
}

export default Home;
const Container = styled.div`
    height:100vh;
    
`
