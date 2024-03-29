import React, {useState, useEffect} from "react"
import { Container } from '../../globalStyles'
import { ReadSpecificData } from '../../databaseFunctions/ReadSpecificData'

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
  EmptyDisplayText
} from './TeamDropdownCarousel.elements'

import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai' // For the left and right arrows on the carousel
import ReactCardFlip from 'react-card-flip'; // For the flip animation for each carousel card
import Select from 'react-select'; // For the dropdown menu

// CardElement function gets called by the TeamDropdownCarousel function below
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


const TeamDropdownCarousel = ({heading}) =>  {
  //Get the current year to render the dropdown menu up to the current year -1
  const date = new Date();
  const currentYear = date.getFullYear();

  //Stores the options for the dropdown menu
  const [options, setOptions] = useState([{value: currentYear-1, label: currentYear-1}]);
  const [selectedOption, setSelectedOption] = useState({value: options[0].value, label: options[0].label})
  const [execs, setExecs] = useState([]); //Stores all the previous
  const [selectedExecs, setSelectedExecs] = useState([]); //Stores the previous execs for the selected year

  useEffect(() => { //Get the announcements in the database on first render
    async function fetchData() {
      let tempExecs = await ReadSpecificData('execs', 'endingYear', 'desc', 'endingYear', '!=', 'Present');
      setExecs(tempExecs.filter(exec => exec.category === 'Exec'))

      let minYear = 9999;
      //Set the options array
      for (let object of tempExecs) {  
        if (object.startingYear < minYear) {
          minYear = object.startingYear;
        }
      }
      setOptions([{value: currentYear-1, label: currentYear-1}]); //Clear options except for first year
      for (let i = currentYear-2; i >= minYear; i--) { //subtract 2 because currentYear -1 is already in the carousel
        setOptions(options => [...options, {value: i, label: i}]);
      }
    }
    fetchData()
  }, [currentYear])


  useEffect(() => {
    //Set the selectedExecs useState array
    setSelectedExecs(execs.filter(exec => exec.startingYear <= selectedOption.value && exec.endingYear >= selectedOption.value));
  }, [selectedOption, execs]);

  const displayCarousel = (selectedExecs) => {    
    //Text for if there are no execs for the selected year
    if (selectedExecs.length === 0) {
      return (
        <EmptyDisplayText>
          No execs for the selected year
        </EmptyDisplayText>
      )
    } else {
      return (
        <Carousel {...settings}>
          {selectedExecs.map((data) => {
            return(
              <CardElement data={data} key={data.id} />
            );
          })}
        </Carousel>
      )
    }
  }


  // Carousel Data
  const numCards = selectedExecs.length; // Stores the number of execs/cards needed to be rendered for the selected year

  // Settings for the carousel
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: numCards >= 3 ? 3 : numCards, // Make the slides to show the # of people if the # of people is less than 3
    slidesToScroll: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    // Breakpoints for the carousel cards. Used when the window width resizes
    responsive: [
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
        {displayCarousel(selectedExecs)}
      </Container>
    </CarouselContainer>
  );
}

export default TeamDropdownCarousel
