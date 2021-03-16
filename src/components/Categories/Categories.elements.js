import styled from 'styled-components'
import { Link } from 'react-router-dom';
import roboticsPicture from '../../images/robotics.jpg'

export const InfoSec = styled.div`
  color: #fff;
  padding: 30px 0;
  background-color: #101522;
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
  color: #fff;

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
  color: #fff;
`

export const BulletWrapper = styled.ul`
  max-width: 500px;
  margin-bottom: 10px;
  margin-left: 30px;
  font-size: 15px;
  color: #fff;
`

export const Bullet = styled.li`
  max-width: 500px;
  font-size: 15px;
  color: #fff;
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


export const LinkImg = styled.div`
  /* background-color: green; */
  background-image: roboticsPicture;
  height: 300px;
  width: 300px;

`

export const LinkText = styled(Link)`
  color: #fff;
`