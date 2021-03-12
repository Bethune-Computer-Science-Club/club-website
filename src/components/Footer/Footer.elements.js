import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const FooterContainer = styled.div`
  background-color: #111111;
  
  padding: 2rem 0 2rem 0;
  justify-content: center;
  align-items: center;
  display: flex;
`

export const FooterRow = styled.div`
  /* background-color: grey; */

  width: 100%;
  display: flex;
  flex-wrap: wrap;
`

export const FooterColumn = styled.div`
  /* background-color: green; */

  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 16px;
  width: 160px;
  box-sizing: border-box;
  color: #fff;
  flex-basis: 33%;
  flex: 1;

  @media screen and (max-width: 760px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`

export const Logo = styled(Link)` //change ??? link??
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  line-height: 100%;
`

export const AddressWrapper = styled.div` 
  justify-self: flex-start;
  width: 180px;
  margin-right: auto;
  margin-left: 3%;

  @media screen and (max-width: 760px) {
    margin-right: auto;
    margin-left: auto;
  }
`

export const Address = styled.p` 
  color: #fff;
  font-size: 1rem;
  line-height: 150%;
  justify-content: left;
`

export const CenterText = styled.p`
  color: #fff;
  text-align: center;
  font-size: 1rem;
  line-height: 150%;
  padding: 10px 0;
`

export const TextLink = styled(Link)`
  color: #fff;
  text-align: center;
  font-size: 1rem;
  cursor: pointer;
`

export const ConnectHeader = styled.h1` 
  color: #fff;
  font-size: 1.5rem;
  padding: 0 0 0 40px;

  @media screen and (max-width: 760px) {
    padding: 0 0 0 0;
  }
`

export const SocialsWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 0 0 20%;

  @media screen and (max-width: 760px) {
    padding: 0 0 0 0;
  }
`

export const SocialsText = styled.p`
  color: #fff;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  line-height: 100%;
  padding: 0 0 0 5px;

`
export const LastLineLogo = styled(Link)` //change ??? link??
  color: #fff;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  line-height: 100%;
`

export const DateLastUpdated = styled.p`
  color: #fff;
  text-align: right;
  font-size: 1rem;
  line-height: 100%;
`
