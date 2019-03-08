import React from "react";
import NavHeader from "./navheader.js";
import styled from "styled-components"; 
import awsimg from "../../src/assets/1_tFl-8wQUENETYLjX5mYWuA.png";
import stpimg from "../../src/assets/payment-logo_1.png";
import s3img from "../../src/assets/s3.webp";
import { FaCcStripe } from "react-icons/fa";
import { FaUnlockAlt } from "react-icons/fa";

const LandingContainerDiv = styled.div`
  width: 100%;
  height: 550px;
  // min-height: 100vh;
  margin: 0 auto;
  background-image: url("http://www.myfreetextures.com/wp-content/uploads/2011/06/brushsteel2.jpg");
  background-size: cover;
  
`;

const LandingCardsContainer = styled.div`
  width: 100%;
  // height: 100vh;
  // margin: 50px auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  


  @media (max-width: 390px) {
    width: 100%;
    align-items: flex-start;

  }
`;
const BackgroundImg = styled.div`

`;

const LandingCards = styled.div`
  // width: 30%;
  // min-width: 330px;
  // height: auto;
  // min-height: 365px;
  // background: rgba(255, 255, 255, 0.5);
  // margin: 0% 0% 0% 8%;
  
  font-size: 2rem;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 459px;
  width: 34rem;
  margin: 0 auto;
  box-shadow: 5px 10px #888888;
  background-color: white;
  border-radius: 10px;

  @media (max-width: 390px) {
   
    margin-top 10%; 

  }
`;

const TextContainer = styled.div`
  height: auto;
  width: 100%;
  margin: 0 auto;
  padding: .5% 0;
  text-align: center;
  border-bottom: 1px solid black;
`;

const UnorderedList = styled.ul`
width: 90%;
border-bottom: 1px solid black;
  text-align: left;
  line-height: 2;
  margin: 0;
  padding-left: 10%;
  padding-bottom: 4%; 
`;

const ListItem = styled.li`
font-size: 1.75rem`;

const FileTransferButton = styled.button`
  width: 45%;
  border-radius: 10px;
  height: 60px;
  font-size: 1.9rem;
  background-color: #206DB5;
  cursor: pointer;
  margin: 0 auto;
  margin-top: 6%;
  text-align: center;
`;

const LandingH3 = styled.h3`
  margin: 0;
  margin-left: -8%; 
`;

const LandingH2 = styled.h2`
  margin: 0; 
  margin-bottom: 1%;
`;

const TitleH1 = styled.h1`
margin-bottom: 0;
`;
const ImageDiv = styled.div`
display: flex;
justify-content: space-around;
margin-top: 1.2%;
// border: 2px solid red;
height: 18.5%;
`;
const FreeTier = styled.div`
font-size: 1.8rem;
font-weight: bold;
`;
const ProTier = styled.div`
font-size: 1.8rem;
font-weight: bold;
`;
const Services = styled.div`
font-size: 1.8rem;
font-weight: bold;
`;
const AwsImg = styled.img`
width: 150px;
height: 90px;
`;
const StripeImg = styled.img`
width: 130px;
height: 90px;
`;
const S3Img = styled.img`
width: 130px;
height: 90px;
`;
export const LandingView = props => {
  return (
    <LandingContainerDiv>
      <NavHeader/>
      <LandingCardsContainer>
        <LandingCards>
          {/* <BackgroundImg src="metalimg" alt="bgimg" width="500px"/> */}
          <TextContainer>
            <TitleH1>Send Big Files</TitleH1>
            <LandingH2>Send files quickly and easily</LandingH2>
          </TextContainer>

          <UnorderedList>
            <LandingH3>Free tier:</LandingH3>
            <ListItem>Send files up to 2gb</ListItem>
            <ListItem>File view history</ListItem>
            <ListItem>File download history</ListItem>
            <ListItem>7 days of file storage</ListItem>
            <LandingH3>Pro tier:</LandingH3>
            <ListItem>70 days of file storage</ListItem>
          </UnorderedList>
          <>
            <FileTransferButton onClick={props.lockOpen}>
              Click to start
            </FileTransferButton>
          </>
          
        </LandingCards>
 
      </LandingCardsContainer>
      <ImageDiv>
        <FreeTier>
          Send files up to 2gb<br/>
          File view history<br/>
          File download history<br/>
          7 days of file storage
        </FreeTier>
        <AwsImg src={awsimg} alt="awslogo"/>
        <ProTier>
          <FaUnlockAlt size={20} color="black"/><br/>
          Unlock Pro Tier Service!<br/>
          Gain access to 70 day file storage!
        </ProTier>
        <StripeImg src={stpimg} alt="stplogo"/>
        <Services>
        <FaCcStripe size={30.5} color="black"/><br/>
          All transactions are handled safely<br/>
           and securely through Stripe!
        </Services>
      </ImageDiv>
    </LandingContainerDiv>
  );
};

export default LandingView;
