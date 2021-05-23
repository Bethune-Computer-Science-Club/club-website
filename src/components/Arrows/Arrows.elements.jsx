import styled, {keyframes} from 'styled-components'

import GreenDownArrows from '../../images/arrows.png'
import GreenUpArrows from '../../images/invertedArrows.png'
import RedDownArrows from '../../images/redArrows.png'
import RedUpArrows from '../../images/redInvertedArrows.png'

export const GridHitbox = styled.div`

  /* width: 90%;
  height: 100%; */
  width: 100px;

`

export const Grid = styled(GridHitbox)`
  display: grid;

  grid-template-columns: 1fr;
  grid-template-rows: 1fr;

  // border: 5px solid red; // Turn on for visibilty.

  grid-template-areas: "overlap";
`

export const GridOverlapper = styled.div`
  //margin: auto;
  margin-left: auto;
  margin-right: auto;
  grid-area: overlap;
` 

export const ArrowBase = styled.img`
  width: 100px;
`
export const GreenDownwardsArrows = styled(ArrowBase).attrs({
    src: GreenDownArrows
  })`
  opacity: 1;
  z-index: 1;

  :hover{
    transition: opacity 0.5s ease;
    opacity: 0;
  }
`
export const GreenUpwardsArrows = styled(ArrowBase).attrs({
    src: GreenUpArrows
  })`
  opacity: 1;
  z-index: 1;

  :hover{
    transition: opacity 0.5s ease;
    opacity: 0;
  }
`
export const RedDownwardsArrows = styled(ArrowBase).attrs({
    src: RedDownArrows
  })`
`
export const RedUpwardsArrows = styled(ArrowBase).attrs({
    src: RedUpArrows
  })`
`

export const DownwardsArrows = ({showContent}) => {
  return(<>
    <Grid>
      <GridOverlapper>
        <RedDownwardsArrows></RedDownwardsArrows>
      </GridOverlapper>
      <GridOverlapper>
        <GreenDownwardsArrows></GreenDownwardsArrows>
      </GridOverlapper>
    </Grid>
  </>)
}

export const UpwardsArrows = ({showContent}) => {
  return(<>
    <Grid>
      <GridOverlapper>
        <RedUpwardsArrows></RedUpwardsArrows>
      </GridOverlapper>
      <GridOverlapper>
        <GreenUpwardsArrows></GreenUpwardsArrows>
      </GridOverlapper>
    </Grid>
  </>)
}