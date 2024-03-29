import React, {useState, useEffect} from "react"
import { Container } from '../../globalStyles'
import { ReadSpecificData } from '../../databaseFunctions/ReadSpecificData'
import {
  Heading,
  CarouselContainer,
  Carousel,
  ContentContainer,
  CardWrapper,
  Card,
  Photo,
  Name,
  Role,
  Description,
  DescriptionWrapper,
  RightArrow,
  LeftArrow,
} from './TeamCarousel.elements'

import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai' // For the left and right arrows on the carousel
import ReactCardFlip from 'react-card-flip'; // For the flip animation for each carousel card

// CardElement function gets called by the TeamCarousel function below
const CardElement = ({ data }) => {
  const [Flipped, setFlipped] = useState(false); // Initialize the card to be unflipped initially
  return (
    <CardWrapper onMouseEnter={() => setFlipped(true)} onMouseLeave={() => setFlipped(false)}> {/* Set Flipped to true when mouse is hovered over the card and false when mouse is not over the card  */}

      {/* This element will respond to the value of Flipped */}
      <ReactCardFlip isFlipped={Flipped} flipDirection="horizontal"> 
        <Card> {/* Content for the front of the card */}
          <ContentContainer>
            <Photo src={data.picture} alt=""></Photo>
            <Name>{data.name}</Name>
            <Role>{data.role}</Role>
          </ContentContainer>
        </Card>

        <Card> {/* Content for the back of the card */}
          <ContentContainer>
            <DescriptionWrapper>
              <Description>{data.description}</Description>
            </DescriptionWrapper>
          </ContentContainer>
        </Card>
      </ReactCardFlip>

    </CardWrapper>
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


const TeamCarousel = ({heading, slidesShown, type}) =>  {
  //Database stuff
  const [execs, setExecs] = useState([]); //Stores the execs for the selected year

  useEffect(() => {
    let tempExecs;
    if (type === 'current execs') {
      //Get current year execs
      async function fetchData() {
        tempExecs = await ReadSpecificData('execs', 'startingYear', 'desc', 'endingYear', '==', 'Present');
        setExecs(tempExecs.filter(exec => exec.category === 'Exec'))
      }
      fetchData()
    }
    else if (type === 'teachers') {
      //Get teachers
      ReadSpecificData('execs', 'startingYear', 'desc', 'category', '==', 'Teacher').then((document) => setExecs(document));
    }
    else if (type === 'website creators') {
      //Get teachers
      ReadSpecificData('execs', 'startingYear', 'desc', 'category', '==', 'Website Creator').then((document) => setExecs(document));
    }
  }, [type]);

  //Stuff below used for slider
  const numCards = execs.length; // Stores the number of execs/cards needed to be rendered for the current year

  // Settings for the carousel
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: numCards >= slidesShown ? slidesShown : numCards,
    slidesToScroll: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    // Breakpoints for the carousel cards. Used when the window width resizes
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: execs.length > 1
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
          {execs.map((data) => {
            return(
              <CardElement data={data} key={data.id} />
            );
          })}
        </Carousel>
      </Container>
    </CarouselContainer>
  );
}

export default TeamCarousel
