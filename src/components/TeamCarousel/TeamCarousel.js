import React, {useState} from "react"
import { Container } from '../../globalStyles'
import {
  Heading,
  CarouselContainer,
  Carousel,
  CardContainer,
  ContentContainer,
  CardWrapper,
  Card,
  Photo,
  Name,
  Description,
  RightArrow,
  LeftArrow,
} from './TeamCarousel.elements'

import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai' // For the left and right arrows on the carousel
import ReactCardFlip from 'react-card-flip'; // For the flip animation for each carousel card

// CardElement function gets called by the TeamCarousel function below
const CardElement = ({ data }) => {
  const [Flipped, setFlipped] = useState(false); // Initialize the card to be unflipped initially
  const image = require('../../pages/TeamPage/execImgs/' + data.imageName).default // Obtain the image
  return (
    <CardContainer>
      <CardWrapper onMouseEnter={() => setFlipped(true)} onMouseLeave={() => setFlipped(false)}> {/* Set Flipped to true when mouse is hovered over the card and false when mouse is not over the card  */}

      {/* This element will respond to the value of Flipped */}
      <ReactCardFlip isFlipped={Flipped} flipDirection="horizontal"> 
        <Card> {/* Content for the front of the card */}
          <ContentContainer>
            <Photo src={image} alt=""></Photo>
            <Name>{data.name}</Name>
            <Description>{data.role}</Description>
          </ContentContainer>
        </Card>

        <Card> {/* Content for the back of the card */}
          <ContentContainer>
            <Description>{data.description}</Description>
          </ContentContainer>
        </Card>
      </ReactCardFlip>

      </CardWrapper>
    </CardContainer>
  );
}

// Custom arrows for the carousel
const NextArrow = ({onClick}) => {
  return (
    <RightArrow onClick={onClick}>
      <AiFillCaretRight size={32} />
    </RightArrow>
  )
}

const PrevArrow = ({onClick}) => {
  return (
    <LeftArrow onClick={onClick}>
      <AiFillCaretLeft size={32} />
    </LeftArrow>
  )
}


const TeamCarousel = ({heading, sliderData}) =>  {
  sliderData = Object.values(sliderData) //Convert the json data into a format react recognizes
  
  const jsonDataLength = Object.keys(sliderData).length; // Stores the number of execs/cards needed to be rendered for the current year

  // Settings for the carousel
  const settings = {
    dots: true,
    infinite: true,
    // autoplay: true,
    // speed: 1000,
    // autoplaySpeed: 2000,
    // cssEase: "linear",
    slidesToShow: jsonDataLength >= 3 ? 3 : jsonDataLength,
    slidesToScroll: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    // Breakpoints for the carousel cards. Used when the window width resizes
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },

    ]
  };

  return (
    <CarouselContainer>
      <Container>
        <Heading>{heading}</Heading>
        {/* Carousel */}
        <Carousel {...settings}>
          {/* Loop through the execs in the current year and render them in the carousel  */}
          {sliderData.map((data, index) => {
            return(
              <CardElement data={data} key={`card-${index}`} />
            );
          })}
        </Carousel>
      </Container>
    </CarouselContainer>
  );
}

export default TeamCarousel
