import React, {useState} from "react"
import { Container } from '../../globalStyles'
import {
  Heading,
  SelectWrapper,
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
} from './TeamDropdownCarousel.elements'

import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai' // For the left and right arrows on the carousel
import ReactCardFlip from 'react-card-flip'; // For the flip animation for each carousel card
import Select from 'react-select'; // For the dropdown menu

// CardElement function gets called by the TeamDropdownCarousel function below
const CardElement = ({ data }) => {
  const [Flipped, setFlipped] = useState(false); // Initialize the card to be unflipped initially
  const image = require('../../pages/TeamPage/ExecImages/' + data.imageName).default // Obtain the image
  return (
    <CardWrapper onMouseEnter={() => setFlipped(true)} onMouseLeave={() => setFlipped(false)}> {/* Set Flipped to true when mouse is hovered over the card and false when mouse is not over the card  */}

      {/* This element will respond to the value of Flipped */}
      <ReactCardFlip isFlipped={Flipped} flipDirection="horizontal"> 
        <Card> {/* Content for the front of the card */}
          <ContentContainer>
            <Photo src={image} alt=""></Photo>
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


const TeamDropdownCarousel = ({heading, sliderData}) =>  {
  // Carousel Data
  const years = Object.keys(sliderData)

  sliderData = Object.values(sliderData); // Convert the json data into a format react recognizes

  let masterArray = [] // A 2D array that stores the year in it's first index and the exec in it's second 
  for(let year of sliderData){
    let execArray = []
    for(let exec of year){
      execArray.push(exec)
    }
    masterArray.push(execArray)
  }

  // Initialize the options array
  let options = [] // Stores the entries in the dropdown manu in the form [{value: 0, label: years[0]}, {value: 1, label: years[0]}, ...] value is the 'index' of each entry and label is the text that is displayed for each entry
  let index = 0 // Initialize index to be 0
  // Loop through each year and put it in a format the dropdown menu can read: {value: index, label: year} index will increment by one for each additional value
  for(let year of years){
    options.push({value: index, label: year})
    index += 1
  }

  const [selectedOption, setSelectedOption] = useState({value: 0, label: years[0]}); // Stores the current selected option of the dropdown menu. Initialized to the first year
  let selectedIndex = selectedOption.value  // Stores the value/index of the current selected option

  let numCards = masterArray[selectedIndex].length; // Stores the number of execs/cards needed to be rendered for the current year

  // Settings for the carousel
  const settings = {
    dots: true,
    infinite: true,
    // autoplay: true,
    // speed: 1000,
    // autoplaySpeed: 2000,
    // cssEase: "linear",
    slidesToShow: numCards >= 3 ? 3 : numCards, // Make the slides to show the # of people if the # of people is less than 3
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

        {/* Dropdown Menu */}
        <SelectWrapper>
          <Select
            placeholder="Select Year"
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
          />
        </SelectWrapper>


        {/* Carousel */}
        <Carousel {...settings}>
          {/* [selectedIndex] allows the cards to change depending on the seleced value in the dropdown menu */}
          {/* Loop through the execs in the current year and render them in the carousel  */}
          {masterArray[selectedIndex].map((data, index) => {
            return(
              <CardElement data={data} key={`card-${index}`} />
            );
          })}
        </Carousel>
      </Container>
    </CarouselContainer>
  );
}

export default TeamDropdownCarousel
