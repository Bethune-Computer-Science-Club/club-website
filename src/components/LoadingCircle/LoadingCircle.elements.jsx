import styled, {keyframes} from 'styled-components'

import {
  AnimatedText
} from '../../components/InfoSection/InfoSectionElems'

// Speed up (ease-in)
const FillTopDonut = keyframes`
  0% {
    transform: rotate(-45deg);
  }
  100% {
    transform: rotate(135deg);
  }
`

// Slow down (ease-out)
const FillBotDonut = keyframes`
  0% {
    transform: rotate(-45deg);
  }
  100% {
    transform: rotate(135deg);
  }
`

export const GridHitbox = styled.div`

  width: 20vw;
  height: 17.5vw;

  @media screen and (max-width: 960px){
    width: 35vw;
    height: 35vw;
  }

`

export const Grid = styled(GridHitbox)`
  display: grid;

  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  width: 20vw;
  height: 17.5vw;

  //border: 5px solid red; // Turn on for visibilty.

  grid-template-areas: "overlap";

  @media screen and (max-width: 960px){
    width: 35vw;
    height: 35vw;
  }
`

export const GridOverlapper = styled.div`
  //margin: auto;
  margin-left: auto;
  margin-right: auto;
  grid-area: overlap;
` 

const PopText = keyframes`
  0% {
    font-size: 2.5rem;
  }
  50%{
    font-size: 3rem;
  }
  100% {
    font-size: 2.5rem;
  }
`

export const ModdedAnimatedText = styled(AnimatedText)`
  text-align: center;
  color: ${props => props.color || "white"};
  font-size: 2.5rem;

  margin-top: 12.5vw;
  grid-area: overlap;

  z-index: 80; // Text needs hitbox, donut was previously covering this text

  @media screen and (max-width: 960px){
    margin-top: 25vw;
  }

  :hover{
    color: #2ec02e;
    transition: color .5s;
    
    animation-name: ${PopText};
    animation-duration: 0.7s;
    animation-fill-mode: forwards;
  }

  @media screen and (max-width: 960px){
    :hover{
      color: #2ec02e;
      transition: color .5s;
      transition: font-size .5s;
      font-size: 2.75rem;
    }
  }
`

export const ItemClipper = styled.div`
  width: 10vw;
  height: 5vw; 
  //background-color: purple;  // Turn this on for visibility

  //display: flex;
  overflow: hidden; // hide the other semicircle

  @media screen and (max-width: 960px){
    width: 25vw;
    height: 12.5vw;
  }
`

export const DonutBaseClass = styled.div`
  width: 10vw;
  height: 10vw; 

  box-sizing: border-box;
  border: 15px solid white;
  border-radius: 50%;

  transform: rotate(-45deg);

  @media screen and (max-width: 960px){
    width: 25vw;
    height: 25vw;
  }
`

export const UpperDonut = styled(DonutBaseClass)`
  border-color: #d12a2a #d12a2a #2ec02e #2ec02e;
  
  //transition: transform 0.5s ease-in;

  animation-name: ${FillTopDonut};
  animation-delay: 0.5s;
  animation-duration: 0.7s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in;
`

export const LowerDonut = styled(DonutBaseClass)`
  margin-top: -5vw; // get the bottom of the donut instead of the top
  //left: 30vw;
  border-color: #2ec02e #2ec02e #d12a2a #d12a2a;

  animation-name: ${FillBotDonut};
  animation-delay: 1.2s;
  animation-duration: 0.7s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-out;

  @media screen and (max-width: 960px){
    margin-top: -12.5vw;
  }
`

const PopCheckmark = keyframes`
  0% {
    margin-top: 2.5vw;
    width: 7.5vw;
  }
  50%{
    margin-top: 2vw;
    width: 9.5vw;
  }
  100% {
    margin-top: 2.5vw;
    width: 7.5vw;
  }
`

const PopMobileCheckmark = keyframes`
  0% {
    margin-top: 7.5vw;
    width: 15vw;
  }
  50%{
    margin-top: 6vw;
    width: 19vw;
  }
  100% {
    margin-top: 7.5vw;
    width: 15vw;
  }
`

export const Checkmark = styled.img`
  margin-top: 2.5vw;
  width: 7.5vw;

  @media screen and (max-width: 960px){
    margin-top: 7.5vw;
    width: 15vw;
  }

  :hover{
    /* margin-top: 2vw;
    width: 9.5vw;
    transition: margin-top .5s;
    transition: width .5s; */
    animation-name: ${PopCheckmark};
    animation-duration: 0.7s;
    animation-fill-mode: forwards;
  }

  @media screen and (max-width: 960px){
    :hover{
      /* margin-top: 6vw;
      width: 19vw;
      transition: margin-top .5s;
      transition: width .5s; */
      animation-name: ${PopMobileCheckmark};
      animation-duration: 0.7s;
      animation-fill-mode: forwards;
    }
  }
`