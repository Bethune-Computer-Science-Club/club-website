import styled from 'styled-components'

export const CenteredLargeText = styled.p`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.textColor};
  text-align: center;
`

export const ProjectContainer = styled.div`
  border: none;
  border-radius: 1em;
  background-color: ${({ theme }) => theme.bkgColor};
  width: 600px;
  height: 150px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 3rem;
`

export const ProjectTitle = styled.h5`
  color: black;
  font-size: 19px;
  font-weight: bold;
  padding: 2.5rem 2.5rem 0rem 2.5rem;
  text-align: left;
  color: ${({ theme }) => theme.textColor};
`

export const ProjectAuthor = styled.h5`
  font-size: 10px;
  padding: 0rem 2.5rem 0rem 2.5rem;
  color: black;
  text-align: left;
  color: ${({ theme }) => theme.textColor};
`

export const ProjectDate = styled.h5`
  font-size: 10px;
  padding: 0.5rem 2.5rem 2.5rem 2.5rem;
  color: black;
  text-align: left;
  color: ${({ theme }) => theme.textColor};
`
export const ProjectImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 1em;
  transform: ${({toggle}) => toggle ? 'translate(-104%,0%)' : 'translate(0%,0%)'};
  transition: transform 1s;
  position:absolute;
  top:0;
  left:0;
`

export const ProjectInfoSecLeft = styled.div`
  width: 50%;
`
export const ProjectInfoSecRight = styled.div`
  width: 50%;
  position:relative;
`

export const ProjectHighlight = styled.div`
  height:100%;
  width:2.5%;
  background-color: ${({ toggle }) => toggle ? '#0aceff' : '#cccccc'};
  border-radius: 2em 0em 0em 2em;
  z-index:3;
`

export const ProjectDescription = styled.p`
  font-size: 12px;
  padding: 1.5rem;
  color: ${({ theme }) => theme.textColor};
  transition: transform 0.5s;
`