import styled from 'styled-components'

export const CenteredLargeText = styled.p`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.textColor};
  text-align: center;
`

export const ProjectContainer = styled.div`
  border: none;
  border-radius: 1em;
  background-color: white;
  width: 600px;
  height: 150px;
  margin: auto;
  display: flex;
`

export const ProjectTitle = styled.h5`
  color: black;
  font-size: 19px;
  font-weight: bold;
  padding: 2.5rem 2.5rem 0rem 2.5rem;
  text-align: left;
`

export const ProjectAuthor = styled.h5`
  font-size: 10px;
  padding: 0rem 2.5rem 0rem 2.5rem;
  color: black;
  text-align: left;
`

export const ProjectDate = styled.h5`
  font-size: 10px;
  padding: 0.5rem 2.5rem 2.5rem 2.5rem;
  color: black;
  text-align: left;
`
export const ProjectImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 1em;
`

export const ProjectInfoSecLeft = styled.div`
  float: left;
  width: 50%;
`

export const ProjectInfoSecRight = styled.div`
  float: left;
  width: 50%;
`

export const ProjectHighlight = styled.div`
  float: left;
  height:100%;
  width:2%;
  background-color: red;
  border-radius: 1em 0em 0em 1em;
`