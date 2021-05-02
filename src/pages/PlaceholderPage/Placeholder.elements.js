import styled from 'styled-components'


export const SectionContainer = styled.div`
  background-color: ${({theme}) => theme.bkgColor};
  color: ${({theme}) => theme.textColor};
  padding: 30px 0;
  transition: all 0.5s ease;
  height: 58vh;  
`

export const InfoRow = styled.div`
  margin: auto;
`

export const Heading = styled.h1`
  font-size: 3.5rem;
  text-align: center;
`

