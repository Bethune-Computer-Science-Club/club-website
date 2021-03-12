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
  /* background-color: grey; */

  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  width: 160px;
  box-sizing: border-box;
  color: #fff;
  flex-basis: 33%;
  flex: 1;

  @media screen and (max-width: 960px) {
    margin-left: auto;
    margin-right: auto;
    max-width: 300px;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`

export const Logo = styled(Link)` //change ??? link??
  /* background-color: green; */

  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  line-height: 100%;
  width: 300px;
  margin-left: 0;
  margin-right: auto;
`

export const Img = styled.img` 
  width: 100px;
`

export const AddressWrapper = styled.div` 
  /* background-color: green; */

  justify-self: flex-start;
  width: 180px;
  margin-right: auto;
  margin-left: 4%;

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

  @media screen and (max-width: 960px) {
    padding: 0 0 0 0;
  }
`

export const SocialsWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 0 0 20%;

  @media screen and (max-width: 960px) {
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
  font-size: 1.15rem;
  display: flex;
  align-items: center;
  line-height: 100%;
`

export const DateLastUpdated = styled.p`
  color: grey;
  text-align: right;
  font-size: 0.75rem;
  line-height: 100%;
  margin-right: 60px;

  @media screen and (max-width: 1200px) {
    margin-right: 0;
  }
`
