import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const FooterContainer = styled.div`
  background-color: #111111;
  
  padding: 2rem 0 1rem 0;
  justify-content: center;
  align-items: center;
  display: flex;
  margin: 0;

`

export const FooterRow = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  box-sizing: border-box;
  color: #fff;
  flex-basis: 20%;
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

export const CenterFooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  box-sizing: border-box;
  color: #fff;
  flex-basis: 20%;
  flex: 1;

  @media screen and (max-width: 960px) {
    margin-left: auto;
    margin-right: auto;
    max-width: 80%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`

export const Logo = styled.div`
  color: #fff;
  justify-self: flex-start;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  line-height: 100%;
  width: 300px;
  margin-left: 0;
  margin-right: auto;
  margin-bottom: 10px;

`

export const Img = styled.img` 
  width: 100px;
`

export const AddressWrapper = styled.div` 
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

export const ConnectHeader = styled.h1` 
  color: #fff;
  font-size: 1.5rem;
  text-align: center;
  width: 255px;
`

export const SocialsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 5px 0;
`

export const SocialsLink = styled.a`
  color: #fff;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  line-height: 100%;
  padding: 0 0 0 5px;
  text-decoration: none;
`

export const LastLineLogo = styled.h1`
  color: #fff;
  justify-content: center;
  text-decoration: none;
  font-size: 1.15rem;
  display: flex;
  align-items: center;
  line-height: 100%;
`

export const DateLastUpdated = styled(Link)`
  color: grey;
  text-decoration: none;
  font-size: 0.75rem;
  margin-right: 10px;
  float: right;
  cursor: default;

  @media screen and (max-width: 1200px) {
    margin-right: 0;
  }
`
export const ConnectColumnContainer = styled.div`
  padding: 0 0 0 25%;
  @media screen and (max-width: 960px) {
    padding: 0;
  }
`