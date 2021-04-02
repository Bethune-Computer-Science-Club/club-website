import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const InfoSec = styled.div`
  padding: 30px 0;
  background-color: ${({theme}) => theme.bkgColor};
  color: ${({theme}) => theme.textColor};
  transition: background-color 0.5s, color 0.5s;
`

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
`

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 760px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;

  @media screen and (max-width: 760px) {
    padding-bottom: 10px;
  }
`

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 30px;
  line-height: 1.1;

  @media screen and (max-width: 760px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`

export const Text = styled.p`
  max-width: 500px;
  margin-bottom: 10px;
  font-size: 15px;
`

export const BulletWrapper = styled.ul`
  max-width: 500px;
  margin-bottom: 10px;
  margin-left: 30px;
  font-size: 15px;
`

export const Bullet = styled.li`
  max-width: 500px;
  font-size: 15px;
`

export const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
`

export const Img = styled.img`
  left: 0;
  padding-left: 0;
  border: 0;
  vertical-align: middle;
  max-width: 100%;
  max-height: 100%;
`

export const LinkText = styled(Link)`
  color: ${({theme}) => theme.textColor};
  transition: color 0.5s;
`